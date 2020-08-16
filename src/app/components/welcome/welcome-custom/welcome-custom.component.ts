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

	constructor(private indexService: IndexService, private formBuilder: FormBuilder, private notificationService: NotificationService, private route: Router) {}

	ngOnInit(): void {
		
		this.createForm();
		this.getBanks();
		this.getCurrency();
	}
	ngAfterViewInit() {
	}

	onSubmit(){
		this.route.navigate(['/summary'])
	}

	selectCurrency(currency){
		this.selectedBaseCurrency = currency;
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
        console.log("getRate", response);
      },
      (error: any) => {
        console.log(error);
      }
    );
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
			this.notificationService.success(`${res.message} - ${res.data.accountName}`)
		});
  }

	createForm() {
		this.cryptoForm = this.formBuilder.group({
			bankCode: [ '', Validators.required ],
			accountNumber: [ '', [Validators.required] ],
			email: [ '', [Validators.required, EmailValidator] ],
			amount: [ '', Validators.required ],
		});
		this.converterForm = this.formBuilder.group({});
	}
}
