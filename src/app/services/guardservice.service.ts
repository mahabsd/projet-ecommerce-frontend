import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardserviceService  {
 isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor() { }
  public i
  login(user) {
    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
   /// const loggeduser = JSON.parse(localStorage.getItem("loggeduser")) || [];
    const test = profiles.find(use => use.email === user.email && use.password === user.password);
    if (test !== undefined) {
      this.i = profiles.indexOf(user)
      localStorage.setItem('token', 'JWT');
      this.isLoginSubject.next(true);
      return true;
    } else {
      return false;
    }
  }
  getIndex() {
  return this.i
}
  logout(): void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  register(user) {
    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    console.log(profiles);
    profiles.push(user)
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }
  getProfile() {

    return JSON.parse(localStorage.getItem("profiles")) || [];
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token === null) {
      return false;
    } else {
      return true;
    }

  }
  
  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
   }

}