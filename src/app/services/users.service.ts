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
      'Authorization': 'Bearer ' + this.user.token
    });
    this.options = { headers:this.httpHeaders }
  }
 
  usersUrl: string = environment.basUrl;
 
  addUser(data) {
    //console.log(data);
    return this.http.post(this.usersUrl + "users/user/add/", data, this.options );
  }
  getUser(id) {
    return this.http.get(this.usersUrl + "users/user/" + id, this.options );
  }
  updateUser(id, data) {
    return this.http.put(this.usersUrl + "users/user/update/"+ id, data, this.options );
  }
  deleteUser(id) {
    return this.http.delete(this.usersUrl + "users/user/delete/" + id, this.options );
  }
  getAllUsers() {
    return this.http.get(this.usersUrl + "users/getAllusers", this.options );
  }
}
