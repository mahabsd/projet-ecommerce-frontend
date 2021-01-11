import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}
interface Role {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form1 = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl(''),
    role: new FormControl('', [Validators.required])
  }, { validators: this.checkPasswords }

  );

  roles: Role[] = [
    { value: 'employee', viewValue: 'Employee' },
    { value: 'manager', viewValue: 'Manager' }
  ];

  users ;

  constructor(private userService: UsersService, private route : Router) {
    this.users = userService.getAllUsers();
  }

  ngOnInit() {

   }
  hide = true;
  matcher = new MyErrorStateMatcher();

  checkPasswords(form1: FormGroup) {
    const pass = form1.get('password').value;
    const confirmPass = form1.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }
  roleValue(value) {
    this.form1.patchValue({
      role: value,
    })
    console.log(this.form1);
  }


  /** add user : post send request to add new user */
  response
  onSubmit() {
    if (!this.form1.valid) { return; }
    this.userService.addUser(this.form1.value).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
      this.route.navigateByUrl('/list-user');

  }


}