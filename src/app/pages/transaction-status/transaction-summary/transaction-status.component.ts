import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-transaction-status',
	templateUrl: './transaction-status.component.html',
	styleUrls: [ './transaction-status.component.css' ]
})
export class TransactionStatusComponent implements OnInit {
	
	constructor(private route: Router) {}

	ngOnInit(): void {
		
	}

	onSubmit() {
		this.route.navigate([ '/' ]);
	}
}
