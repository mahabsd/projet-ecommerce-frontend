
  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators, FormGroupDirective , NgForm} from '@angular/forms';
import { Router } from '@angular/router';
  import { ClientsService } from '../services//clients.service';

  interface Type {
    value: string;
    viewValue: string;
  }
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  
    formClient=new FormGroup({
      name: new FormControl('',[Validators.required]),
      type:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      userClient:new FormControl(''),
      favourite:new FormControl(''),
      phone:new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required , Validators.email]),
    });
    types: Type[] = [
      { value: 'fourniture', viewValue: 'Fourniture' },
      { value: 'food', viewValue: 'Food' },
      { value: 'sportswear', viewValue: 'Sports wear' },
    ]; 
      clients = [];
            
      constructor(private clientService: ClientsService, private route: Router){
       }
        
      ngOnInit() {
        this.formClient.patchValue({
          userClient: JSON.parse(localStorage.getItem("loggeduser")),
        })
      }

      hide = true;
      typeValue(value) {
        this.formClient.patchValue({
          type: value,
        })
        console.log(this.formClient);
      }
      onSubmit(){
        if(!this.formClient.valid) {return;}
        this.clientService.addClient(this.formClient.value).subscribe(
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
          this.route.navigateByUrl('/list-client');

      }
}