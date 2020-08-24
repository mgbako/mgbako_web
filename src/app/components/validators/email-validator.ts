import { Validator, AbstractControl, FormGroup } from '@angular/forms';

export function EmailValidator(control: AbstractControl) {
	if (control && (control.value !== null || control.value !== undefined || control.value !== '')) {
		const email = control.value;
		if (email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
			return null;
		}
		return { email: true };
	}
}
