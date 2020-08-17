import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';

import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { IndexService } from 'src/app/pages/index/index.service';
import { finalize } from 'rxjs/operators';
import { EmailValidator } from '../../validators/email-validator';
import { CharacterValidator } from '../../validators/character-validator';
import { NotificationService } from '../../notification/notification.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
	selector: 'app-welcome-custom',
	templateUrl: './welcome-custom.component.html',
	styleUrls: [ './welcome-custom.component.css' ]
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

	constructor(private indexService: IndexService, private formBuilder: FormBuilder, private notificationService: NotificationService, private router: Router, private dataService: DataService) {}

	ngOnInit(): void {
		
		this.createForm();
		this.getBanks();
		this.getCurrency();
	}
	ngAfterViewInit() {
	}

	onSubmit(){
		const datas = this.cryptoForm.value;

		if(this.cryptoForm.valid){
			this.router.navigateByUrl('/summary', { state: datas })
		}

	}

	selectCurrency(currency){
		this.selectedCurrency = currency;
	}

	getBanks(){
		this.indexService.getBanks().pipe(
			finalize( () => {

			})
		).subscribe(
			res => {
				if(res.status === true){
					this.banks = res.data;
				}
				console.log(res);
			}, error => {
				console.log(error)
			}
		)
	}

	getCurrency(){
		this.indexService.getCurrencies(1, 100).pipe(
			finalize( () => {

			})
		).subscribe(
			res => {
				if(res.status === true){
					this.currencies = res.data;
					this.filterCurrencies(res.data);
					this.getRate(
						this.selectedCoin.code,
						this.selectedBaseCurrency.code,
						this.selectedOtherCurrency.code
					);
				}
				this.selectedCurrency = this.getNGN(res.data);
				console.log(res);
			}, error => {
				console.log(error)
			}
		)
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
				this.getCurrentBTCValue = this.convertToBTC(this.rateData.baseCurrencyAmount, this.rateData.sendingCurrencyAmount)
				console.log("getRate", response);
				
      },
      (error: any) => {
        console.log(error);
      }
    );
	}

	getCurrentBTCAmount(event: any){
		const amount = event.target.value;
		let btcValue;

		if(this.selectedCurrency.code === 'NGN'){
			btcValue = this.getNGNToBTC(amount, this.rateData.receivingCurrencyAmount, this.rateData.sendingCurrencyAmount)
		}

		if(this.selectedCurrency.code === 'USD'){
			btcValue = this.getUSDToBTC(amount, this.rateData.sendingCurrencyAmount)
		}

		console.log("btcValue", +btcValue.toFixed(8));
		this.cryptoForm.patchValue({btcValue: +btcValue.toFixed(8), sendingcurrencyCode: this.selectedCurrency.code});

	}
	
	convertToBTC(baseCurrencyAmount, sendingCurrencyAmount){
		return (baseCurrencyAmount / sendingCurrencyAmount).toFixed(2)
	}

	getNGNToBTC(amount, receivingCurrencyAmount, sendingCurrencyAmount){
		return (amount / receivingCurrencyAmount) * sendingCurrencyAmount;
	}

	getUSDToBTC(amount, sendingCurrencyAmount){
		return amount * sendingCurrencyAmount;
	}

	filterCurrencies(currencies:any[]) {
    this.cryptoCurrencies = currencies.filter(
      (currency) => currency.isCrypto
    );
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

	getNGN(currencies){
		return currencies.filter((currency) => {
			return currency.code === 'NGN'
		})[0]
	}
	
	onAccountLookup(event: any){
		const bankCode = event.target.value
		const {accountNumber} = this.cryptoForm.value;

		if(accountNumber.length !== 10){
			
			return;
		}

    const data = {
			bankCode,
			accountNumber
		}

		

		console.log(data);
    this.indexService.accountLookup(data).pipe(
			finalize(() => {

			})
		).subscribe(res => {
			console.log('onAccountLookup', res)
			const {address, accountName} = res.data
			this.cryptoForm.patchValue({accountName: accountName, address: address})
			this.notificationService.success(`${res.message} - ${res.data.accountName}`)
		});
  }

	createForm() {
		this.cryptoForm = this.formBuilder.group({
			bankCode: [ '', Validators.required ],
			accountNumber: [ '', [Validators.required] ],
			accountName: [ '', [Validators.required] ],
			email: [ '', [Validators.required, EmailValidator] ],
			amount: [ '', Validators.required ],
			btcValue: [''],
			sendingcurrencyCode: [''],
			address: ['']
		});
		//this.converterForm = this.formBuilder.group({});
	}
}
