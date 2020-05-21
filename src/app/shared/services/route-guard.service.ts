import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    private router$: Router
  ) { }

  canActivate(): boolean {
    if (true) {
      this.router$.navigate(['public/login']);
      return false;
    }
    return true;
  }
}
