import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  get addDisabled(): boolean {
    return this.hasField(this.currentType) || (this.currentType === FieldType.Text && this.fieldName === '');
  }

  constructor(private fb: FormBuilder) {}

  hasField(name: string): boolean {
    return Boolean(this.contactForm.get(name));
  }

  addField(): void {
    this.addMode = false;
    if (this.currentType === FieldType.Text) {
      const formGroup = this.fb.group({ [this.fieldName]: [''] });
      (this.contactForm.get('customFields') as FormArray).push(formGroup);
    } else {
      this.contactForm.addControl(FieldType.Link, this.fb.control('', Validators.required));
    }
    this.contactFormChange.emit(this.contactForm);
  }
}
