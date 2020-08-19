import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FeatureOneComponent } from './components/features/feature-one/feature-one.component';
import { WorkComponent } from './components/work/work.component';
import { FaqOneComponent } from './components/faq/faq-one/faq-one.component';
import { FooterOneComponent } from './components/footer/footer-one/footer-one.component';
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import { FeatureFiveComponent } from './components/features/feature-five/feature-five.component';
import { DiscoverFiveComponent } from './components/discover/discover-five/discover-five.component';

import { IndexComponent } from './pages/index/index.component';
import { HeaderCustomComponent } from './components/header/header-custom/header-custom.component';
import { WelcomeCustomComponent } from './components/welcome/welcome-custom/welcome-custom.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { InputValidatorDirective } from './components/validators/input-validator.directive';
import { NotificationComponent } from './components/notification/notification.component';
import { TransactionSummaryComponent } from './pages/transaction-summary/transaction-summary/transaction-summary.component';
import { TransactionStatusComponent } from './pages/transaction-status/transaction-status.component';
import { VerificationComponent } from './pages/verification/verification/verification.component';
@NgModule({
	declarations: [
		AppComponent,
		FeatureOneComponent,
		WorkComponent,
		FaqOneComponent,
		FooterOneComponent,
		ScrollupComponent,
		FeatureFiveComponent,
		DiscoverFiveComponent,
		IndexComponent,
		HeaderCustomComponent,
		WelcomeCustomComponent,
		InputComponent,
		InputValidatorDirective,
		NotificationComponent,
		TransactionSummaryComponent,
		TransactionStatusComponent,
		VerificationComponent
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
    NgxQRCodeModule
	],
	providers: [ NgbActiveModal ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
