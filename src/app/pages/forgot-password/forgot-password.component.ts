import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { finalize } from "rxjs/operators";
import {
  componentError,
  serverError,
  formatCurrencyBefore,
} from "src/app/helper";
import { NotificationService } from "src/app/components/notification/notification.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailValidator } from "src/app/components/validators/email-validator";
import { ForgotPasswordService } from "./forgot-password.service";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  transaction: any;
  cryptoForm: FormGroup;
  formloader: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private actRoute: ActivatedRoute,
    private forgotPasswordService: ForgotPasswordService,
    private themeService: ThemeService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  get mode() {
    if (this.themeService.mode) {
      return { dark: true };
    }

    return "";
  }

  onSubmit() {
    if (this.cryptoForm.valid) {
      this.formloader = true;

      const data = {
        username: this.cryptoForm.value.email,
      };

      this.forgotPasswordService
        .onForgot(data)
        .pipe(
          finalize(() => {
            this.formloader = false;
          })
        )
        .subscribe(
          (res) => {
            if (res.status === true) {
              console.log(res);
              this.notificationService.success(res.message);
              this.route.navigateByUrl("/");
              return;
            }

            this.notificationService.error(res.message);
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  createForm() {
    this.cryptoForm = this.formBuilder.group({
      email: ["", [Validators.required, EmailValidator]],
    });
    //this.converterForm = this.formBuilder.group({});
  }
}
