import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any = [];
  user;
  httpHeaders;
  options;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('loggeduser'));
    this.httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer' + this.user.token
    });
    this.options = { headers: this.httpHeaders }
  }

  usersUrl: string = environment.basUrl;
  loginUser(data) {
    console.log(data);
    return this.http.post(this.usersUrl + "users/user/login/", data);
  }
  addUser(data) {
    console.log(data);
    return this.http.post(this.usersUrl + "users/user/add/", data);
  }

  getUser(id) {
    return this.http.get(this.usersUrl + "users/user/" + id);
  }
  updateUser(id) {
    return this.http.get(this.usersUrl + "users/user/update" + id);
  }
  deleteUser(id) {
    return this.http.delete(this.usersUrl + "users/user/delete" + id);
  }
  getAllUsers() {
    return this.http.get(this.usersUrl + "users/getAllusers");
  }
}
