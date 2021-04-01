import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from './../assets/data.json';

import { Contact } from './interfaces';

@Injectable()
export class AppApiService {
  private data = new Map<string, Contact>((data as any[]).map(item => [item.id, item]));

  getContacts(): Observable<Contact[]> {
    return of([...this.data.values()]);
  }

  addContact(contact: Contact): void {
    this.data.set(contact.id, contact);
  }

  getContact(id: string): Observable<Contact> {
    return of(this.data.get(id) as Contact);
  }
}
