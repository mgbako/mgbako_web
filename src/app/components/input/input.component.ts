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
  @Input() required: true;
  @Input() readonly: false;
  @Input() type: string = "text";
  @Input() maxlength: number;
  @Input() validator: string = "currency";

  @Output() blur = new EventEmitter<String>();

  ngOnInit() {}

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return touched && errors;
  }

  onBlur(event: any) {
    this.blur.emit(event.target.value);
  }
}
