import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-transaction-status',
	templateUrl: './transaction-status.component.html',
	styleUrls: [ './transaction-status.component.css' ]
})
export class TransactionStatusComponent implements OnInit {
	
	constructor(private route: Router, private actRoute: ActivatedRoute) {}

	ngOnInit(): void {
		const params = this.actRoute.snapshot.paramMap.get('transactionReference');
		console.log("params", params);
	}

	onSubmit() {
		this.route.navigate([ '/' ]);
	}
}
