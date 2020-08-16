import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/components/notification/notification.service';

@Component({
	selector: 'app-transaction-summary',
	templateUrl: './transaction-summary.component.html',
	styleUrls: [ './transaction-summary.component.css' ]
})
export class TransactionSummaryComponent implements OnInit {
	elementType : 'url' | 'canvas' | 'img' = 'url';
	value : string = 'BTChet122878734384499HYT083';

	constructor(private route: Router, private notificationService: NotificationService) {}

	ngOnInit(): void {
		this.elementType = 'canvas';
	}

	onSubmit() {
		this.route.navigate([ '/status' ]);
	}

	copyToken(tokenText:any) {
		/* Select the text field */
		tokenText.select();
		tokenText.setSelectionRange(0, 99999); /*For mobile devices*/
	
		/* Copy the text inside the text field */
		document.execCommand("copy");
	
		/* Alert the copied text */
		this.notificationService.success("Copied the text: " + tokenText.value);

	}
}
