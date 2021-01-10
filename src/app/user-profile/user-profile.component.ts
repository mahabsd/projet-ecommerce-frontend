import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    users;user;
    constructor(private userService: UsersService){  }
  
    ngOnInit() {
      this.users = this.userService.getAllUsers();
      this.user=JSON.parse(localStorage.getItem("loggeduser"));
    }
  }