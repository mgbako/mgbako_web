import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, ValidationErrors } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  @Input() control: FormGroup;
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() type: string = "text";
  @Input() maxlength: number;
  @Input() validator: string = "currency";
  @Input() isloading: boolean = false;

  @Output() blur = new EventEmitter<String>();
  @Output() keyup = new EventEmitter<String>();

  ngOnInit() {
    console.log(this.type);
  }

  showErrors() {
    const { touched, errors } = this.control;
    return touched && errors;
  }

  onBlur(event: any) {
    this.blur.emit(event.target.value);
  }
  onKeyup(event: any) {
    this.keyup.emit(event.target.value);
  }
}
