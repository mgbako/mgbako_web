import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { TransactionSummaryComponent } from './pages/transaction-summary/transaction-summary/transaction-summary.component';
import { TransactionStatusComponent } from './pages/transaction-status/transaction-status.component';
import { VerificationComponent } from './pages/verification/verification/verification.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'summary', component: TransactionSummaryComponent, data: { title: 'Summary' } },
	{ path: 'status/:transactionReference', component: TransactionStatusComponent },
	{ path: 'verify/:userId/:code', component: VerificationComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
