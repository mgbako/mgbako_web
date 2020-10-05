import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AccountVerificationService } from "./account-verification.service";
import { finalize } from "rxjs/operators";
import {
  componentError,
  serverError,
  formatCurrencyBefore
} from "src/app/helper";
import { NotificationService } from "src/app/components/notification/notification.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailValidator } from "src/app/components/validators/email-validator";

@Component({
  selector: "app-account-verification",
  templateUrl: "./account-verification.component.html",
  styleUrls: ["./account-verification.component.css"]
})
export class AccountVerificationComponent implements OnInit {
  transaction: any;
  cryptoForm: FormGroup;
  formloader: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private actRoute: ActivatedRoute,
    private accountVericationService: AccountVerificationService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  transactionStatus(status: string) {
    switch (status) {
      case "Processing":
        return "text-primary";
      case "Pending":
        return "text-warning";
      case "Failed":
        return "text-danger";
      case "Successful":
        return "text-success";
      case "Confirmed":
        return "text-info";
      default:
        return "text-dark";
    }
  }

  onSubmit() {
    this.route.navigate(["/"]);
  }

  createForm() {
    this.cryptoForm = this.formBuilder.group({
      fullname: ["", Validators.required],
      email: ["", [Validators.required, EmailValidator]],
      bvn: ["", [Validators.required]],
      phonenumber: ["", [Validators.required]]
    });
    //this.converterForm = this.formBuilder.group({});
  }
}
