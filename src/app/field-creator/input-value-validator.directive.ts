import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: InputValueValidatorDirective, multi: true}]
})
export class InputValueValidatorDirective implements Validator {
  @Input('appForbiddenName') values!: string[];

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      return this.values.includes(control.value) ? { forbiddenName: { value: control.value } } : null;
    } else {
      return null;
    }
  }
}
