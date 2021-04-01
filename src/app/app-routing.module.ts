import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppResolverService } from './app-resolver.service';
import { AppApiService } from './app-api.service';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { contacts: AppResolverService },
    runGuardsAndResolvers: 'pathParamsChange'
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: CreateComponent,
    resolve: { contacts: AppResolverService }
  },
  { path: '**', redirectTo: '' },
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
