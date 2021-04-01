import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

export enum FieldType {
  Text = 'text',
  Phone = 'phone',
  Link = 'link',
}

@Component({
  selector: 'app-field-creator',
  templateUrl: './field-creator.component.html',
  styleUrls: ['./field-creator.component.scss']
})
export class FieldCreatorComponent {
  readonly FieldType = FieldType;
  currentType: FieldType = FieldType.Text;
  addMode = false;
  fieldName = '';

  @Input() contactForm!: FormGroup;
  @Output() contactFormChange = new EventEmitter<FormGroup>();
  @ViewChild('form')
  form!: NgForm;

  get addDisabled(): boolean {
    return this.currentType === FieldType.Text
      ? this.fieldName === '' || Boolean(this.form?.invalid) : this.form?.pristine || this.hasField(this.currentType);
  }

  get forbiddenValues(): string[] {
    return (this.contactForm.get('customFields') as FormArray).controls.map( control => Object.keys(control.value)[0]);
  }

  constructor(private fb: FormBuilder) {}

  hasField(name: string): boolean {
    return Boolean(this.contactForm.get(name));
  }

  addField(): void {
    if (this.currentType === FieldType.Text) {
      const formGroup = this.fb.group({ [this.fieldName]: [''] });
      (this.contactForm.get('customFields') as FormArray).push(formGroup);
    } else {
      this.contactForm.addControl(FieldType.Link, this.fb.control('', Validators.required));
    }
    this.fieldName = '';
    this.addMode = false;
    this.currentType = FieldType.Text;
    this.contactFormChange.emit(this.contactForm);
  }
}
