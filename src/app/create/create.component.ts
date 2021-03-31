import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AppApiService } from '../app-api.service';
import { Contact } from '../interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  get customFields(): FormArray {
    return this.form.get('customFields') as FormArray;
  }

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private api: AppApiService) {
    this.form = this.fb.group({
      id: [Date.now().toString()],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      customFields: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ contacts }) => {
      if (contacts) {
        this.initForm(contacts);
      }
    });
  }

  getFieldName(value: string): string {
    return Object.keys(value)[0];
  }

  deleteField(control: AbstractControl): void {
    this.form.markAsDirty();
    Object.entries((control.parent as FormGroup).controls).forEach(([key, value]) => {
      if (value === control){
        (control.parent as FormGroup).removeControl(key);
      }
    });
  }

  saveContact(): void {
    this.form.value.customFields = (this.form.value as Contact).customFields.filter(field => Object.keys(field)[0]);
    this.api.addContact(this.form.value);
  }

  private initForm(contact: Contact): void {
    this.form.reset(contact);
    if (contact.link) {
      this.form.addControl('link', this.fb.control(contact.link));
    }
    this.resetFormArray(contact.customFields);
  }

  private resetFormArray(customFields: [{ [key: string]: string }]): void {
    customFields.forEach(field => {
      (this.form.get('customFields') as FormArray).push(this.fb.group({ [Object.keys(field)[0]]: [Object.values(field)[0]] }));
    });
  }
}
