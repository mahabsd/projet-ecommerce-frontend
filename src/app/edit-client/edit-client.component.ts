import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ClientsService } from '../services/clients.service';
import { ActivatedRoute } from '@angular/router';


interface Type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {


  formClient = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    userClient: new FormControl(''),
    favourite: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  }
  );
  clients;
  x: number;
  types: Type[] = [
    { value: 'fourniture', viewValue: 'Fourniture' },
    { value: 'food', viewValue: 'Food' },
    { value: 'sportswear', viewValue: 'Sports wear' },
  ];
  constructor(private clientService: ClientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.clientService.getAllclients().subscribe(
      (res) => {
        this.clients = res;
        console.log("POST call successful value returned in body",
          this.clients);
        this.route.paramMap.subscribe(param => {
          let i = +param.get('i'); console.log(i);
          this.formClient.patchValue({
            name: this.clients[i].name,
            email: this.clients[i].email,
            address: this.clients[i].address,
            type: this.clients[i].type,
            favourite: this.clients[i].favourite,
            phone: this.clients[i].phone
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
    console.log(this.clients);
    this.formClient.patchValue({
      userClient: JSON.parse(localStorage.getItem("loggeduser"))._id,
    })
  }

  hide = true;
  typeValue(value) {
    this.formClient.patchValue({
      type: value,
    })
    console.log(this.formClient.value);
  }
  somethingClick(checkbox) {
    console.log(checkbox.checked);
    if (checkbox.checked == false) {
      this.formClient.patchValue({
        favourite: "yes",
      })
    } else {
      this.formClient.patchValue({
        favourite: "no",
      })
    }
    console.log("object    " + this.formClient.value ) 
  }
  edit() {

    this.clientService.updateClient(this.clients[this.x]._id, this.formClient.value).subscribe(
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
  }

}