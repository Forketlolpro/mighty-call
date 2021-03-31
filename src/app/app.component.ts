import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get isCreatePage(): boolean {
    return this.router.url === '/create';
  }

  constructor(private router: Router) {}
}
