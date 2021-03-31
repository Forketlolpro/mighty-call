import { Component, Input } from '@angular/core';
import { Contact } from '../interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contact!: Contact;

  get fullName(): string {
    return `${this.contact.name} ${this.contact.surname}`;
  }

  getCustomFieldLiable(field: { [key: string]: string }): string {
    const name = Object.keys(field)[0];
    return `${name}: ${field[name]}`;
  }
}
