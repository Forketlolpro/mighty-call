import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AppApiService } from './app-api.service';
import { Contact } from './interfaces';

@Injectable()
export class AppResolverService implements Resolve<Contact[] | Contact>{

  constructor(private api: AppApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact[] | Contact> {
    return route.params.id ? this.api.getContact(route.params.id) : this.api.getContacts();
  }
}
