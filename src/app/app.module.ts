import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { FeatureOneComponent } from "./components/features/feature-one/feature-one.component";
import { WorkComponent } from "./components/work/work.component";
import { FaqOneComponent } from "./components/faq/faq-one/faq-one.component";
import { FooterOneComponent } from "./components/footer/footer-one/footer-one.component";
import { ScrollupComponent } from "./components/scrollup/scrollup.component";
import { FeatureFiveComponent } from "./components/features/feature-five/feature-five.component";
import { DiscoverFiveComponent } from "./components/discover/discover-five/discover-five.component";

import { IndexComponent } from "./pages/index/index.component";
import { HeaderCustomComponent } from "./components/header/header-custom/header-custom.component";
import { WelcomeCustomComponent } from "./components/welcome/welcome-custom/welcome-custom.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";

import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./components/input/input.component";
import { InputValidatorDirective } from "./components/validators/input-validator.directive";
import { NotificationComponent } from "./components/notification/notification.component";
import { TransactionSummaryComponent } from "./pages/transaction-summary/transaction-summary/transaction-summary.component";
import { TransactionStatusComponent } from "./pages/transaction-status/transaction-status.component";
import { VerificationComponent } from "./pages/verification/verification/verification.component";

import { NgwWowModule } from "ngx-wow";
import { LoaderComponent } from "./components/loader/loader.component";
import { PagerLoaderComponent } from "./components/page-loader/page-loader.component";
import { FooterTwoComponent } from "./components/footer/footer-two/footer-two.component";
import { AboutusComponent } from "./pages/aboutus/aboutus/aboutus.component";
import { FooterThreeComponent } from "./components/footer/footer-three/footer-three/footer-three.component";
import { PrivacyComponent } from "./pages/privacy/privacy/privacy.component";
import { TermsComponent } from "./pages/terms/terms/terms.component";
import { FaqCategoryComponent } from "./pages/faq-category/faq-category/faq-category.component";
import { FaqsComponent } from "./pages/faqs/faqs.component";
import { LazyImgDirective } from "./lazy-img.directive";
import { InnercircleComponent } from "./components/innercircle/innercircle/innercircle.component";
import { ModalComponent } from "./components/modal/modal/modal.component";
import { AccountVerificationComponent } from "./pages/account-verification/account-verification.component";
import { EndsarsComponent } from "./pages/endsars/endsars.component";
import { HeaderCustom2Component } from "./components/header2/header-custom/header-custom2.component";
import { FooterSarsComponent } from "./components/footer/footer-sars/footer-sars.component";
@NgModule({
  declarations: [
    AppComponent,
    FeatureOneComponent,
    WorkComponent,
    FaqOneComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FooterSarsComponent,
    ScrollupComponent,
    FeatureFiveComponent,
    DiscoverFiveComponent,
    IndexComponent,
    HeaderCustomComponent,
    HeaderCustom2Component,
    WelcomeCustomComponent,
    InputComponent,
    InputValidatorDirective,
    NotificationComponent,
    TransactionSummaryComponent,
    TransactionStatusComponent,
    VerificationComponent,
    LoaderComponent,
    PagerLoaderComponent,
    AboutusComponent,
    FooterThreeComponent,
    PrivacyComponent,
    TermsComponent,
    FaqCategoryComponent,
    FaqsComponent,
    LazyImgDirective,
    InnercircleComponent,
    ModalComponent,
    AccountVerificationComponent,
    EndsarsComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
