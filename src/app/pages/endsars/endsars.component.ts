import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { NotificationService } from "src/app/components/notification/notification.service";
import { EmailValidator } from "src/app/components/validators/email-validator";
import { EndSarsService } from "./endsars.service";

@Component({
  selector: "app-endsars",
  templateUrl: "./endsars.component.html",
  styleUrls: ["./endsars.component.css"],
})
export class EndsarsComponent implements OnInit {
  cryptoForm: FormGroup;
  formloader: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private endSarsService: EndSarsService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    this.formloader = true;

    if (this.cryptoForm.valid) {
      const data = {
        ...this.cryptoForm.value,
      };

      this.endSarsService
        .onAirtimePurchasePromo(data)
        .pipe(
          finalize(() => {
            this.formloader = false;
          })
        )
        .subscribe(
          (res) => {
            if (res.status) {
              this.createForm();
              this.notificationService.success(res.message);
              return;
            }
            this.notificationService.error(res.message);
          },
          (error) => {}
        );
    }
  }

  createForm() {
    this.cryptoForm = this.formBuilder.group({
      phoneNumber: [
        "",
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
        ],
      ],
      email: [""],
      //twitter: [""],
    });
  }
}
