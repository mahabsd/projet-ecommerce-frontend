import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form1 = new FormGroup({
    lastName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,]),
    confirmPassword: new FormControl(''),
  }
  );
  users;
  x: number;
  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (res) => {
        this.users = res;
        console.log("POST call successful value returned in body",
          this.users);

        this.route.paramMap.subscribe(param => {
          let i = +param.get('i'); console.log(i);

          this.form1.patchValue({
            lastName: this.users[i].lastName,
            firstName: this.users[i].firstName,
            email: this.users[i].email,
            adresse: this.users[i].adresse,
          });

          this.x = i;
        });

      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
    console.log(this.users);


  }

  hide = true;

  edit() {
    // this.users[this.x] = this.form1.value;
    console.log("id de user " + this.users[this.x]._id);

    this.userService.updateUser(this.users[this.x]._id, this.form1.value).subscribe(
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
      this.router.navigateByUrl('/list-user');
  }
}
