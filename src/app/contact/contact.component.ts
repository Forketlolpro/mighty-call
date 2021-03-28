import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contact!: Contact;
}
