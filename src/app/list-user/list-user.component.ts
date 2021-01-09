import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
 
      recherche="";
      users;
      usersToFilter;
      constructor(private userService: UsersService){  }
    
      ngOnInit() {
        this.users = this.userService.getAllUsers();
        this.usersToFilter = [...this.users];
      }
      supprimer(i){
        this.users.userService.deleteUser(i) ;
      }
    }