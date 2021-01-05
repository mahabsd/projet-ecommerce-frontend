import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuardserviceService } from 'app/services/guardservice.service';
import { UsersService } from 'app/services/users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {

  form1 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    adresse: new FormControl(''),
    email: new FormControl('',  [Validators.required]),
    password: new FormControl('',  [Validators.required]),
    confirmPassword: new FormControl(''),
    role: new FormControl('')
  }
  );
  constructor(private AuthServices: GuardserviceService , private rou : Router , private httpClientServ : UsersService) { }
users
  ngOnInit(): void {
    this.httpClientServ.getAllUsers().subscribe(
      (response) => {                           //next() callback
        console.log('response received')
        this.users = JSON.stringify(response ); 
        console.log("users " + this.users );
    
      },  (error) => {                              //error() callback
        console.error('Request failed with error')
      },
      () => {                                   //complete() callback
        console.error('Request completed')
      })
  }
  /** login user : post send request to login user and get the token */

  // onSubmit() {

  // if (this.AuthServices.login(this.form1)) {
  // //  this.formService.addUsers(this.registrationForm.value);
  //   localStorage.setItem('loggeduser',JSON.stringify(this.form1));
  //   this.rou.navigateByUrl("/dashboard");

  // } else { console.log("mdp incorrect"); }

//}
}
