import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit,AfterViewInit {
  defaultPageNo: number = 1;
  defaultPageSize: number = 10;
  currencyForm: FormGroup;
  isLoading: boolean;
  cryptoCurrencies : any ;
  otherCurrencies : any ;
  currencies : any ;

  constructor(
    private indexService: IndexService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  ngAfterViewInit(){
    this.getCurrencies(this.defaultPageNo, this.defaultPageSize);
  }
  createForm() {
    this.currencyForm = this.formBuilder.group({
      code: ["", Validators.required],
      description: ["", Validators.required],
      isCrypto: ["", Validators.required],
      isReceiving: ["", Validators.required],
      isSending: ["", Validators.required]
    });
  }

 
  getCurrencies(pageNo: any, pageSize: any) {
    this.cryptoCurrencies = [];
    this.indexService.getCurrencies(pageNo, pageSize).subscribe(
      (response: any) => {
        this.currencies = response ? response.data : [];
      },
      (error: any) => {}
    );
  }

}
