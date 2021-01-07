import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: any = [];
  user;
  httpHeaders;
  options;
  constructor(private http: HttpClient) {

  }

  usersUrl: string = environment.basUrl;
  loginUser(data) {
    console.log(data);
    return this.http.post(this.usersUrl + "users/user/login/", data);
  }
 
}
