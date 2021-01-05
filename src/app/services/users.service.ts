import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:any=[];
  constructor(private http: HttpClient) { }

  usersUrl: string = "/api/";

  addUser(data) {
    console.log(data);
    return this.http.post(this.usersUrl + "users/user/add/", data);
  }
  loginUser(data) {
    console.log(data);
    return this.http.post(this.usersUrl + "users/user/login/", data);
  }
  getUser(id) {
    return this.http.get(this.usersUrl +"users/user/"+ id );
  }
  updateUser(id) {
    return this.http.get(this.usersUrl +"users/user/update"+ id );
  }
  deleteUser(id) {
    return this.http.delete(this.usersUrl +"users/user/delete"+ id );
  }
  getAllUsers() {
    return this.http.get(this.usersUrl +"/users/getAllusers" );
  }
}
