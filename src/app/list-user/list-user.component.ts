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
        this.userService.getAllUsers().subscribe(
          (val) => {
            this.users = val
              console.log("POST call successful value returned in body", 
                          val);
          },
          response => {
              console.log("POST call in error", response);
          },
          () => {
              console.log("The POST observable is now completed.");
          });
      }
      supprimer(i){
        this.userService.deleteUser(this.users[i]._id).subscribe(
          (val) => {
              console.log("POST call successful value returned in body", 
                          val);
          },
          response => {
              console.log("POST call in error", response);
          },
          () => {
              console.log("The POST observable is now completed.");
          });;
      }
      // filters :
 
  
  
  
  }