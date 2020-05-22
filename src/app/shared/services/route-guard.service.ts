import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    private router$: Router,
    private uS$: UserService
  ) { }

  canActivate(): boolean {
    if (!this.uS$.currentUser.value) {
      this.router$.navigate(['public/login']);
      return false;
    }
    return true;
  }
}
