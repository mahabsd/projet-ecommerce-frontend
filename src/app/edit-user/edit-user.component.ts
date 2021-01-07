import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

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
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%&*])[\w!@#=$%^&*]{8,}$/)]),
    confirmPassword: new FormControl(''),
  }
  );
  users ;
  x: number;
  constructor(private userService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
    this.route.paramMap.subscribe(param => {
      let i = +param.get('i'); console.log(i);
      this.form1.controls['username'].setValue(this.users[i].username);
      this.form1.controls['nom'].setValue(this.users[i].nom);
      this.form1.controls['prenom'].setValue(this.users[i].prenom);
      this.form1.controls['email'].setValue(this.users[i].email);
      this.form1.controls['adresse'].setValue(this.users[i].adresse);
      this.form1.controls['password'].setValue(this.users[i].password);
      this.x = i;
    });
  }

  hide = true;

  edit() {
    this.users[this.x] = this.form1.value;
  }
}
