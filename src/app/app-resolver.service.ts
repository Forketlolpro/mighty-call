import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { AppApiService } from './app-api.service';
import { Contact } from './interfaces';

@Injectable()
export class AppResolverService implements Resolve<Contact[]>{

  constructor(private api: AppApiService) {}

  resolve(): Observable<Contact[]> {
    return this.api.getContacts();
  }
}
