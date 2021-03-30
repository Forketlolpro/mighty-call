import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from './interfaces';

@Injectable()
export class AppApiService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('assets/data.json');
  }

  addContact(): Observable<boolean> {
    return this.http.post<boolean>('assets/data.json', ['asdads']);
  }
}
