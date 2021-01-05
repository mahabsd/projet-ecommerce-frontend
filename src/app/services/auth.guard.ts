import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { GuardserviceService } from './guardservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(public auth: GuardserviceService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['localhost:4200/login']);
      return false;
    }
    return true;
  }
  
}
