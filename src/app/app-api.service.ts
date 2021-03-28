import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppApiService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {
    return this.http.get('assets/data.json');
  }
}
