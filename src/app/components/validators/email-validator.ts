import { Validator, AbstractControl, FormGroup } from '@angular/forms';

export function EmailValidator(control: AbstractControl) {
  if (
    control &&
    (control.value !== null ||
      control.value !== undefined ||
      control.value !== '')
  ) {
    const email = control.value;
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return null;
    }
    return { email: true };
  }
}
