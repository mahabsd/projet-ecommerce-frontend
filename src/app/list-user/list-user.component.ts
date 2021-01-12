import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
 manager =false
      recherche;
      users;
      usersToFilter;
      loggeduser;
      constructor(private userService: UsersService){  }
    
      ngOnInit() {
        this.loggeduser = JSON.parse(localStorage.getItem("loggeduser"));
        if (this.loggeduser.role === "manager") {
          this.manager = true;
        } 
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
 
  
  
  
  }