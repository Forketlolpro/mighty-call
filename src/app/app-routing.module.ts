import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppResolverService } from './app-resolver.service';
import { AppApiService } from './app-api.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { contacts: AppResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AppResolverService,
    AppApiService
  ]
})
export class AppRoutingModule { }
