import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { FooterOneComponent } from "./components/footer/footer-one/footer-one.component";
import { ScrollupComponent } from "./components/scrollup/scrollup.component";

import { IndexComponent } from "./pages/index/index.component";
import { HeaderCustomComponent } from "./components/header/header-custom/header-custom.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";

import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./components/input/input.component";
import { InputValidatorDirective } from "./components/validators/input-validator.directive";
import { NotificationComponent } from "./components/notification/notification.component";

import { NgwWowModule } from "ngx-wow";
import { LoaderComponent } from "./components/loader/loader.component";
import { PagerLoaderComponent } from "./components/page-loader/page-loader.component";
import { FooterTwoComponent } from "./components/footer/footer-two/footer-two.component";

import { FooterThreeComponent } from "./components/footer/footer-three/footer-three/footer-three.component";

import { LazyImgDirective } from "./lazy-img.directive";

import { HeaderCustom2Component } from "./components/header2/header-custom/header-custom2.component";
import { FooterSarsComponent } from "./components/footer/footer-sars/footer-sars.component";

import { LoaderDarkComponent } from "./components/loader-dark/loader-dark.component";

import { InputErrorComponent } from "./components/input-error/input-error.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SigninComponent } from './pages/signin/signin/signin.component';
import { ContactUsComponent } from "./pages/contact-us/signin/contact-us.component";
@NgModule({
  declarations: [
    AppComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FooterSarsComponent,
    ScrollupComponent,

    IndexComponent,
    HeaderCustomComponent,
    HeaderCustom2Component,

    InputComponent,
    InputErrorComponent,
    InputValidatorDirective,
    NotificationComponent,

    LoaderComponent,
    PagerLoaderComponent,
    FooterThreeComponent,
    LazyImgDirective,
    LoaderDarkComponent,
    SigninComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    NgwWowModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
