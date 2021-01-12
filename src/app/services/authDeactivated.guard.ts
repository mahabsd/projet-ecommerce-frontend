import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { GuardserviceService } from './guardservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDeactivateGuard {
  constructor(public auth: GuardserviceService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isNotAllowed()) {
      this.router.navigate(['localhost:4200/Dashboard']);
      return false;
    }
    return true;
  }
  
}
