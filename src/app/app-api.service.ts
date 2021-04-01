import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from './../assets/data.json';

import { Contact } from './interfaces';

@Injectable()
export class AppApiService {
  private data = new Map<number, Contact>(this.parseData(data).map(item => [item.id, item]));

  getContacts(): Observable<Contact[]> {
    return of([...this.data.values()]);
  }

  addContact(contact: Contact): void {
    this.data.set(contact.id, contact);
  }

  getContact(id: number): Observable<Contact> {
    return of(this.data.get(id) as Contact);
  }

  private parseData(rawData: any): Contact[] {
    rawData.map((item: any) => ({ ...item, customFields: [ ...item.customFields ] } as Contact));
    return rawData as Contact[];
  }
}
