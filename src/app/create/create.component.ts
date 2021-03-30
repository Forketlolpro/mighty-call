import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  form!: FormGroup;

  get customFields(): FormArray {
    return this.form.get('customFields') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      customFields: this.fb.array([])
    });
  }

  getFieldName(value: any): string {
    return Object.keys(value)[0];
  }

  deleteField(control: FormControl): void {
    Object.entries(this.form.controls).forEach(([key, value]) => {
      if (value === control){
        (control.parent as FormGroup).removeControl(key);
      }
    });
  }
}
