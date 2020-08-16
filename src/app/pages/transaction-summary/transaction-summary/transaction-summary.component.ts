import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-transaction-summary',
	templateUrl: './transaction-summary.component.html',
	styleUrls: [ './transaction-summary.component.css' ]
})
export class TransactionSummaryComponent implements OnInit {
	constructor(private route: Router) {}

	ngOnInit(): void {}

	onSubmit() {
		this.route.navigate([ '/status' ]);
	}
}
