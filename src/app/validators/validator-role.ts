import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function roleValidator(validRoles: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && !validRoles.includes(value)) {
      return { invalidRole: true };
    }
    return null;
  };
}