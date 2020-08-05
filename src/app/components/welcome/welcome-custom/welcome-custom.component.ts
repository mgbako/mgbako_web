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
import { IndexService } from "src/app/pages/index/index.service";
@Component({
  selector: "app-welcome-custom",
  templateUrl: "./welcome-custom.component.html",
  styleUrls: ["./welcome-custom.component.css"],
})
export class WelcomeCustomComponent implements OnInit, AfterViewInit {
  // currencies = [
  //   {
  //     id: 1,
  //     description: "Bitcoin",
  //     name: "Bitcoin",
  //     code: "bitcoin",
  //     isCrypto: true,
  //     isReceiving: true,
  //     isSending: true,
  //   },
  //   {
  //     id: 2,
  //     description: "United states dollar",
  //     name: "United states dollar",
  //     code: "us",
  //     isCrypto: false,
  //     isReceiving: true,
  //     isSending: true,
  //   },
  // ];
  // countries = [
  //   { id: 1, name: "Nigeria", code: "ng" },
  //   { id: 2, name: "United States", code: "us" },
  //   { id: 3, name: "France", code: "fr" },
  // ];

  selectedCityName: any;
  selectedCityId: any;
  selectedCoin: any;
  selectedBaseCurrency: any;
  selectedOtherCurrency: any;

  defaultPageNo: number = 1;
  defaultPageSize: number = 10;
  currencyForm: FormGroup;
  converterForm: FormGroup;
  isLoading: boolean;
  cryptoCurrencies: any;
  baseCurrencies: any;
  otherCurrencies: any;
  currencies: any;
  otherValue: any;
  baseValue: any;
  coinValue: any = 1;
  rateData: any;

  constructor(
    private indexService: IndexService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCurrencies(this.defaultPageNo, this.defaultPageSize);
    this.createForm();
  }
  ngAfterViewInit() {
    
  }
  convertOnLoad() {
    const payload = {
      sendCurrencyCode: this.selectedCoin.code,
      basecurrencyCode: this.selectedBaseCurrency.code,
      receiveCurrencyCode: this.selectedOtherCurrency.code,
    };
    this.indexService.getRate(payload).subscribe(
      (response: any) => {
        this.rateData = response ? response.data : [];

        this.otherValue = 0;
        this.baseValue = 0;

        this.baseValue =
        parseFloat(((this.rateData.baseCurrencyAmount * this.coinValue) /
          parseFloat(this.rateData.sendingCurrencyAmount)).toFixed(2));
        this.otherValue =
          parseFloat((this.baseValue * parseFloat(this.rateData.receivingCurrencyAmount)).toFixed(2));
          this.addCommasBaseValue();
          this.addCommasOtherValue();
        },
      (error: any) => {
        console.log(error);
      }
    );
    
  }
  createForm() {
    this.currencyForm = this.formBuilder.group({
      code: ["", Validators.required],
      description: ["", Validators.required],
      isCrypto: ["", Validators.required],
      isReceiving: ["", Validators.required],
      isSending: ["", Validators.required],
    });
    this.converterForm = this.formBuilder.group({});
  }
  getCurrencies(pageNo: any, pageSize: any) {
    this.cryptoCurrencies = [];
    this.indexService.getCurrencies(pageNo, pageSize).subscribe(
      (response: any) => {
        this.currencies = response ? response.data : [];
        this.filterCurrencies();
        this.convertOnLoad();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  filterCurrencies() {
    this.cryptoCurrencies = this.currencies.filter(
      (currency) => currency.isCrypto
    );
    this.baseCurrencies = this.currencies.filter(
      (currency) => currency.isBaseCurrency
    );
    this.otherCurrencies = this.currencies.filter(
      (currency) => !currency.isCrypto && !currency.isBaseCurrency
    );
    //console.log(this.cryptoCurrencies,this.otherCurrencies);
    this.selectedCoin = this.cryptoCurrencies[0];
    this.selectedBaseCurrency = this.baseCurrencies[0];
    this.selectedOtherCurrency = this.otherCurrencies[0];
  }

  getRate(sending, base, receiving) {
    /***
     *  get exchange rate
     * @param sending currency, base currency, receiving currency
     * @returns conversion rate
     */
    const payload = {
      sendCurrencyCode: sending,
      basecurrencyCode: base,
      receiveCurrencyCode: receiving,
    };
    this.indexService.getRate(payload).subscribe(
      (response: any) => {
        this.rateData = response ? response.data : [];
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  convertBase(event?) {
    this.otherValue = 0;
    this.coinValue = 0;

    this.getRate(
      this.selectedCoin.code,
      this.selectedBaseCurrency.code,
      this.selectedOtherCurrency.code
    );

    this.otherValue =
    parseFloat((this.baseValue * parseFloat(this.rateData.receivingCurrencyAmount)).toFixed(2));
    this.coinValue =
    parseFloat((this.baseValue * parseFloat(this.rateData.sendingCurrencyAmount)).toFixed(6));
    // this.addCommasBaseValue();
    this.addCommasOtherValue();
    this.addCommasCoinValue();
  }
  convertCoin(event?) {
    this.otherValue = 0;
    this.baseValue = 0;

    this.getRate(
      this.selectedCoin.code,
      this.selectedBaseCurrency.code,
      this.selectedOtherCurrency.code
    );

    this.baseValue =
    parseFloat(((this.rateData.baseCurrencyAmount * this.coinValue) /
      parseFloat(this.rateData.sendingCurrencyAmount)).toFixed(2));
    this.otherValue =
    parseFloat((this.baseValue * parseFloat(this.rateData.receivingCurrencyAmount)).toFixed(2));
    this.addCommasBaseValue();
    this.addCommasOtherValue();
  }
  convertOther(event?) {
    this.baseValue = 0;
    this.coinValue = 0;

    this.getRate(
      this.selectedCoin.code,
      this.selectedBaseCurrency.code,
      this.selectedOtherCurrency.code
    );

    this.baseValue =
    parseFloat((this.otherValue / parseFloat(this.rateData.receivingCurrencyAmount)).toFixed(2));
    this.coinValue =
    parseFloat((this.baseValue * parseFloat(this.rateData.sendingCurrencyAmount)).toFixed(6));
    this.addCommasBaseValue();
    this.addCommasCoinValue();
    // this.addCommasOtherValue();
  }
  addCommasBaseValue() {
    const x = String(this.baseValue).replace(/,/gi, '');
    let nummbe = Number(x);
    let p = nummbe.toLocaleString();
    this.baseValue = p ; 
  }
  removeCommasBaseValue() {
    let nummbe = String(this.baseValue).replace(/,/gi, '');
    let p = nummbe;
    this.baseValue = p ;
  }
  addCommasOtherValue() {
    const x = String(this.otherValue).replace(/,/gi, '');
    let nummbe = Number(x);
    let p = nummbe.toLocaleString();
    this.otherValue = p ; 
  }
  removeCommasOtherValue() {
    let nummbe = String(this.otherValue).replace(/,/gi, '');
    let p = nummbe;
    this.otherValue = p ;
  }
  addCommasCoinValue() {
    const x = String(this.coinValue).replace(/,/gi, '');
    let nummbe = Number(x);
    let p = nummbe.toLocaleString();
    this.coinValue = p ; 
  }
  removeCommasCoinValue() {
    let nummbe = String(this.coinValue).replace(/,/gi, '');
    let p = nummbe;
    this.coinValue = p ;
  }
}
