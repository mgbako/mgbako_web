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
import { ResetPasswordService } from "./reset-password.service";
import { ThemeService } from "src/app/services/theme.service";
import { ConfirmPasswordValidator } from "src/app/validator";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  transaction: any;
  cryptoForm: FormGroup;
  formloader: boolean;
  userId: string;
  code: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private actRoute: ActivatedRoute,
    private resetPasswordService: ResetPasswordService,
    private themeService: ThemeService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    /*  this.userId = this.actRoute.snapshot.paramMap.get("userId");
    this.code = this.actRoute.snapshot.paramMap.get("code"); */
    this.actRoute.queryParams.subscribe((params) => {
      this.userId = params["userId"];
      this.code = params["code"];
    });

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
        newPassword: this.cryptoForm.value.newPassword,
        confirmNewPassword: this.cryptoForm.value.confirmPassword,
        userId: this.userId,
        code: this.code,
      };

      this.resetPasswordService
        .onResetPassword(data)
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
      newPassword: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required, ConfirmPasswordValidator]],
    });
    //this.converterForm = this.formBuilder.group({});
  }
}
