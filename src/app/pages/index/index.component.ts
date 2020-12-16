import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ThemeService } from "src/app/services/theme.service";
import { IndexService } from "./index.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit, AfterViewInit {
  defaultPageNo: number = 1;
  defaultPageSize: number = 10;
  currencyForm: FormGroup;
  isLoading: boolean;
  cryptoCurrencies: any;
  otherCurrencies: any;
  currencies: any;
  themeMode: string;

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"}
  ];
  slideConfig = {
    //"slidesToShow": 3,
    "slidesToScroll": 1,
    arrows: true,
    draggable: false,
    //autoplay: true,
    //autoplaySpeed: 1000,
    dots: true,
    centerMode: true,
    centerPadding: '200px',
    "nextArrow": "<div class='nav-btn next-slide'><i class='fas fa-angle-right'></i></div>",
    "prevArrow": "<div class='nav-btn prev-slide d-flex'><i class='fas fa-angle-left'></i></div>",
    
  };

  constructor(
    private indexService: IndexService,
    private formBuilder: FormBuilder,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.createForm();
    console.log("this.themeService.mode", this.themeService.mode);
  }

  ngAfterViewInit() {
    this.getCurrencies(this.defaultPageNo, this.defaultPageSize);
  }
  createForm() {
    this.currencyForm = this.formBuilder.group({
      code: ["", Validators.required],
      description: ["", Validators.required],
      isCrypto: ["", Validators.required],
      isReceiving: ["", Validators.required],
      isSending: ["", Validators.required],
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

  get mode() {
    if (this.themeService.mode) {
      return  true;
    }

    return false;
  }

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
}
