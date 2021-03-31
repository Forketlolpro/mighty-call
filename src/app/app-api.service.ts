import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from './../assets/data.json';

import { Contact } from './interfaces';

@Injectable()
export class AppApiService {
  data: Contact[] = data as Contact[];

  getContacts(): Observable<Contact[]> {
    return of(this.data);
  }

  addContact(contact: Contact): void {
    this.data.push(contact);
  }
}
