import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from 'src/app/components/validators/email-validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  showPassword = false;
  isLoading = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  signin(){

  }

  togglePasswords() {
    console.log(this.showPassword);
    this.showPassword = !this.showPassword;
  }

  private createForm() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, EmailValidator]],
      password: ['', Validators.required]
      // remember: true
    });
  }

}
