import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-transaction-summary',
	templateUrl: './transaction-summary.component.html',
	styleUrls: [ './transaction-summary.component.css' ]
})
export class TransactionSummaryComponent implements OnInit {
	elementType : 'url' | 'canvas' | 'img' = 'url';
	value : string = 'BTChet122878734384499HYT083';

	constructor(private route: Router) {}

	ngOnInit(): void {
		this.elementType = 'canvas';
	}

	onSubmit() {
		this.route.navigate([ '/status' ]);
	}
}
