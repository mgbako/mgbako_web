import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionsService } from './transactions.service';
import { finalize } from 'rxjs/operators';
import { componentError, serverError, formatCurrencyBefore } from 'src/app/helper';
import { NotificationService } from 'src/app/components/notification/notification.service';

@Component({
	selector: 'app-transaction-status',
	templateUrl: './transaction-status.component.html',
	styleUrls: [ './transaction-status.component.css' ]
})
export class TransactionStatusComponent implements OnInit {
	transaction: any;

	constructor(
		private route: Router,
		private actRoute: ActivatedRoute,
		private transactionsService: TransactionsService,
		private notificationService: NotificationService
	) {}

	ngOnInit(): void {
		const transactionReference = this.actRoute.snapshot.paramMap.get('transactionReference');
		console.log('params', transactionReference);

		this.transactionsService.getTransactionDetail(transactionReference).pipe(finalize(() => {})).subscribe(
			(res) => {
				if (!res.status) {
					componentError(res.message, this.notificationService);
					return;
				}
				console.log(res);
				this.transaction = {
					...res.data,
					sellAmount: formatCurrencyBefore(res.data.sellAmount, 'USD'),
					nairaReceived: formatCurrencyBefore(res.data.nairaReceived, 'NGN')
				};
				this.notificationService.success(res.message);
			},
			(error) => {
				serverError(error, this.notificationService);
			}
		);
	}

	onSubmit() {
		this.route.navigate([ '/' ]);
	}
}
