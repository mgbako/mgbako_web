import { Component, OnInit, AfterViewInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators,
} from "@angular/forms";

import { NgSelectModule, NgOption } from "@ng-select/ng-select";
import {
  IndexService,
  TransactionModel,
} from "src/app/pages/index/index.service";
import { finalize } from "rxjs/operators";
import { EmailValidator } from "../../validators/email-validator";
import { CharacterValidator } from "../../validators/character-validator";
import { NotificationService } from "../../notification/notification.service";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";
import { justformatCurrency, formatCurrency } from "src/app/helper";
import { filter } from "lodash";
@Component({
  selector: "app-welcome-custom",
  templateUrl: "./welcome-custom.component.html",
  styleUrls: ["./welcome-custom.component.css"],
})
export class WelcomeCustomComponent implements OnInit, AfterViewInit {
  cryptoForm: FormGroup;
  converterForm: FormGroup;
  banks: any[];
  currencies: any[];
  selectedCurrency: any;
  cryptoCurrencies: any;
  baseCurrencies: any;
  otherCurrencies: any;

  rateData: any;

  selectedCoin: any;
  selectedBaseCurrency: any;
  selectedOtherCurrency: any;
  getCurrentBTCValue: any;

  timerInterval: any;
  counter: any;

  formloader: boolean;
  lookupLoader: boolean;
  bankLoader: boolean;
  rateLoader: boolean;

  amount: number = 0.0;
  btcValue: any = 0.0;

  constructor(
    private indexService: IndexService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getBanks();
    this.getCurrency();
    this.getRate("NGN", this.amount);
  }
  ngAfterViewInit() {}

  onSubmit() {
    if (this.cryptoForm.valid) {
      const datas = {
        ...this.cryptoForm.value,
        receiveCurrencyCode: this.selectedCurrency.code,
        btcRate: this.rateData.btcRate,
        btcToSend: this.rateData.btcToSend.toFixed(8),
        currencyToSend: this.rateData.currencyToSend,
        currencyToReceive: this.rateData.currencyToReceive,
        amountToSend: this.rateData.amountToSend,
      };

      const payload = {
        sendAmount: this.rateData.amountToSend,
        accountNumber: datas.accountNumber,
        sendCurrencyCode: this.selectedCurrency.code,
        narration: "",
        email: datas.email,
      };

      this.formloader = true;

      this.onSendTransaction(payload, datas);
    }
  }

  onSendTransaction(payload: TransactionModel, otherDatas: any) {
    this.indexService
      .sendTransaction(payload)
      .pipe(
        finalize(() => {
          this.formloader = false;
        })
      )
      .subscribe(
        (res) => {
          if (res.status === true) {
            this.router.navigateByUrl("/summary", { state: otherDatas });
            return;
          }

          this.notificationService.error(res.message);
        },
        (error) => {}
      );
  }

  selectCurrency(currency) {
    this.selectedCurrency = currency;
    this.getRate(this.selectedCurrency.code, this.amount);
  }

  getBanks() {
    this.bankLoader = true;
    this.indexService
      .getBanks()
      .pipe(
        finalize(() => {
          this.bankLoader = false;
        })
      )
      .subscribe(
        (res) => {
          if (res.status === true) {
            this.banks = res.data;
          }
          // console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getCurrency() {
    this.indexService
      .getCurrencies(1, 100)
      .pipe(finalize(() => {}))
      .subscribe(
        (res) => {
          if (res.status === true) {
            this.currencies = filter(res.data, ["isReceiving", true]);
            this.filterCurrencies(res.data);
          }
          this.selectedCurrency = this.getNGN(res.data);
          //console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getRate(sending, amount) {
    this.rateLoader = true;
    this.btcValue = "--.--";
    this.getCurrentBTCValue = "--.--";
    /***
     *  get exchange rate
     * @param sending currency, base currency, receiving currency
     * @returns conversion rate
     */
    const payload = {
      sendCurrencyCode: sending,
      amount: amount,
    };
    this.indexService.getRate(payload).subscribe(
      (response: any) => {
        if (response.status) {
          this.rateLoader = false;
          this.rateData = response ? response.data : [];
          let btcValue;

          this.getCurrentBTCValue = formatCurrency(
            response.data.btcRate,
            "USD"
          );

          btcValue = response.data.btcToSend; //justformatCurrency();
          this.btcValue = +btcValue.toFixed(8);

          //console.log("getRate", this.rateData);
          this.startCountdown(response.data.expiry);
          return;
        }

        this.notificationService.error(response.message);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getCurrentBTCAmount(amount: any) {
    this.amount = amount;

    if (this.amount) {
      if (this.amount <= 0) {
        return this.notificationService.error(
          "Send Amount can't be less than 1"
        );
      }
      // console.log("amount", this.amount);
      this.getRate(this.selectedCurrency.code, amount);
    }
  }

  convertToBTC(baseCurrencyAmount, sendingCurrencyAmount) {
    return (baseCurrencyAmount / sendingCurrencyAmount).toFixed(2);
  }

  getNGNToBTC(amount, receivingCurrencyAmount, sendingCurrencyAmount) {
    return (amount / receivingCurrencyAmount) * sendingCurrencyAmount;
  }

  getUSDToBTC(amount, sendingCurrencyAmount) {
    return amount * sendingCurrencyAmount;
  }

  filterCurrencies(currencies: any[]) {
    this.cryptoCurrencies = currencies.filter((currency) => currency.isCrypto);
    this.baseCurrencies = currencies.filter(
      (currency) => currency.isBaseCurrency
    );
    this.otherCurrencies = currencies.filter(
      (currency) => !currency.isCrypto && !currency.isBaseCurrency
    );
    //console.log(this.cryptoCurrencies,this.otherCurrencies);
    this.selectedCoin = this.cryptoCurrencies[0];
    this.selectedBaseCurrency = this.baseCurrencies[0];
    this.selectedOtherCurrency = this.otherCurrencies[0];
  }

  getNGN(currencies) {
    return currencies.filter((currency) => {
      return currency.code === "NGN";
    })[0];
  }

  onAccountLookup(event: any) {
    this.lookupLoader = true;
    const bankCode = event.target.value;
    const { accountNumber } = this.cryptoForm.value;

    if (accountNumber.length !== 10 || bankCode == "") return;

    const data = {
      bankCode,
      accountNumber,
    };

    this.indexService
      .accountLookup(data)
      .pipe(
        finalize(() => {
          this.lookupLoader = false;
        })
      )
      .subscribe((res) => {
        if (res.status) {
          const { address, accountName } = res.data;
          this.cryptoForm.patchValue({
            accountName: accountName,
            address: address,
          });
          return;
        }
        this.notificationService.error(`${res.message}`);
      });
  }

  onAccountLookupNumber(event: any) {
    this.lookupLoader = true;
    const accountNumber = event;
    const { bankCode } = this.cryptoForm.value;

    if (accountNumber.length !== 10 || bankCode == "") return;

    const data = {
      bankCode,
      accountNumber,
    };

    this.indexService
      .accountLookup(data)
      .pipe(
        finalize(() => {
          this.lookupLoader = false;
        })
      )
      .subscribe((res) => {
        if (res.status) {
          const { address, accountName } = res.data;
          this.cryptoForm.patchValue({
            accountName: accountName,
            address: address,
          });
          return;
        }
        this.notificationService.error(`${res.message}`);
      });
  }

  startCountdown(sec: any) {
    clearInterval(this.timerInterval);
    this.counter = "";
    let time = sec;
    let tmp = time;
    let val;

    this.timerInterval = setInterval(() => {
      var c = tmp--,
        m = (c / 60) >> 0,
        s = c - m * 60;
      this.counter = m + ":" + (String(s).length > 1 ? "" : "0") + s;
      //this.counter =

      if (m <= 0 && s <= 0) {
        clearInterval(this.timerInterval);
        this.getRate(this.selectedCurrency.code, this.amount);
        //this.getCurrentBTCAmount(this.cryptoForm.value.amount);
      }

      // console.log(m, s);
    }, 1000);
  }

  createForm() {
    this.cryptoForm = this.formBuilder.group({
      bankCode: ["", Validators.required],
      accountNumber: ["", [Validators.required]],
      accountName: ["", [Validators.required]],
      email: ["", [Validators.required, EmailValidator]],
      amount: ["", Validators.required],
      btcValue: [""],
      sendingcurrencyCode: ["BTC"],
      address: [""],
    });
    //this.converterForm = this.formBuilder.group({});
  }
}
