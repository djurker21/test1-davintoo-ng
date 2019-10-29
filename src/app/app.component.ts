import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

import { Router } from '@angular/router';

import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1-devitoo-ng';

  currentUser: User;

  constructor(
    private authService: AuthService,
    private router: Router) {
      this.authService.currentUser.subscribe(x => this.currentUser = x);
    }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
