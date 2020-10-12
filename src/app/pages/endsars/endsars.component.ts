import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmailValidator } from "src/app/components/validators/email-validator";

@Component({
  selector: "app-endsars",
  templateUrl: "./endsars.component.html",
  styleUrls: ["./endsars.component.css"],
})
export class EndsarsComponent implements OnInit {
  cryptoForm: FormGroup;
  formloader: boolean;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {}

  createForm() {
    this.cryptoForm = this.formBuilder.group({
      phoneNumber: ["", Validators.required],
      email: ["", [Validators.required, EmailValidator]],
      twitter: [""],
    });
    //this.converterForm = this.formBuilder.group({});
  }
}
