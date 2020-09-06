import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NotificationService } from "src/app/components/notification/notification.service";
import { DataService } from "src/app/services/data.service";
import { IndexService } from "../../index/index.service";
import { formatCurrency, formatCurrencyBefore } from "src/app/helper";

@Component({
  selector: "app-transaction-summary",
  templateUrl: "./transaction-summary.component.html",
  styleUrls: ["./transaction-summary.component.css"],
})
export class TransactionSummaryComponent implements OnInit {
  elementType: "url" | "canvas" | "img" = "url";
  value: string = "";
  transactionData: any;
  rateData: any;
  getCurrentBTCValue: any;
  expiry: any;
  expiryCount: any = 0;
  btcValue: any = 0;

  timerInterval: any;
  counter: any;
  amountToRecieve: any = 0.0;

  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private indexService: IndexService
  ) {
    if (this.route.getCurrentNavigation() != null) {
      this.transactionData = this.route.getCurrentNavigation().extras.state;
      if (this.transactionData === undefined) this.route.navigate(["/"]);

      console.log("state", this.transactionData);
      /* setInterval(() => {
				//this.expiryCount--;
				this.getRate('BTC', 'USD', this.transactionData.sendingcurrencyCode);
			}, 6000) */
    }
  }

  ngOnInit(): void {
    this.elementType = "canvas";

    console.log("TS getRate", this.transactionData);

    this.getRate(
      this.transactionData.receiveCurrencyCode,
      this.transactionData.amount
    );
    this.value = this.transactionData.address;
  }

  toCurrency(amount, code) {
    return formatCurrencyBefore(amount, code);
  }

  onSubmit() {
    //this.route.navigate([ '/status' ]);
  }

  copyToken(tokenText: any) {
    /* Select the text field */
    tokenText.select();
    tokenText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    this.notificationService.success("Copied the text: " + tokenText.value);
  }

  getRate(sending, amount) {
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
        this.rateData = response ? response.data : [];
        this.getCurrentBTCValue = formatCurrency(response.data.btcRate, "USD"); //justformatCurrency();
        let btcValue;
        btcValue = response.data.btcToSend; //justformatCurrency();
        this.amountToRecieve = this.toCurrency(
          response.data.amountToRecieve,
          response.data.currencyToReceive
        ); //justformatCurrency();
        this.btcValue = +btcValue.toFixed(8);
        this.expiry = response.data.expiry;
        //this.expiryCount = 6000 / 60;
        console.log("getRate", response);
        this.startCountdown(this.expiry);
        // this.getCurrentBTCAmount(this.transactionData.amount);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getCurrentBTCAmount(amount: any) {
    let btcValue;

    console.log(
      "this.transactionData.sendingcurrencyCode",
      this.transactionData.sendingcurrencyCode
    );

    if (this.transactionData.receiveCurrencyCode === "NGN") {
      btcValue = this.getNGNToBTC(
        amount,
        this.rateData.receivingCurrencyAmount,
        this.rateData.sendingCurrencyAmount
      );
    }

    if (this.transactionData.receiveCurrencyCode === "USD") {
      btcValue = this.getUSDToBTC(amount, this.rateData.sendingCurrencyAmount);
    }

    console.log("getCurrentBTCAmount", +btcValue);
    this.transactionData.btcValue = +btcValue.toFixed(8);
    //console.log("+btcValue", +btcValue.toFixed(8));
    //this.transactionData.btcValue = +btcValue.toFixed(8);
  }

  getNGNToBTC(amount, receivingCurrencyAmount, sendingCurrencyAmount) {
    return (amount / receivingCurrencyAmount) * sendingCurrencyAmount;
  }

  getUSDToBTC(amount, sendingCurrencyAmount) {
    return amount * sendingCurrencyAmount;
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
        this.getRate(
          this.transactionData.receiveCurrencyCode,
          this.transactionData.amount
        );
      }

      // console.log(m, s);
    }, 1000);
  }

  convertToBTC(baseCurrencyAmount, sendingCurrencyAmount) {
    return (baseCurrencyAmount / sendingCurrencyAmount).toFixed(2);
  }
}
