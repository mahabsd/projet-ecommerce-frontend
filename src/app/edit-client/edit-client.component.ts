import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective , NgForm} from '@angular/forms';
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
   
         formClient=new FormGroup({
         name: new FormControl('',[Validators.required]),
         type:new FormControl('',[Validators.required]),
         address:new FormControl('',[Validators.required]),
         userClient:new FormControl(''),
         favourite:new FormControl('',[Validators.required]),
         phone:new FormControl('',[Validators.required]),
         email: new FormControl('',[Validators.required , Validators.email])         }
        );
         clients = [];
         x:number;
         types: Type[] = [
          { value: 'fourniture', viewValue: 'Fourniture' },
          { value: 'food', viewValue: 'Food' },
          { value: 'sportswear', viewValue: 'Sports wear' },
        ]; 
         constructor(private clientService: ClientsService, private route: ActivatedRoute){}
      
          ngOnInit(){
            this.clients=this.clientService.getClients();
            this.route.paramMap.subscribe(param => {
            let i = +param.get('i');
            this.formClient.controls['name'].setValue(this.clients[i].name);
            this.formClient.controls['type'].setValue(this.clients[i].type);
            this.formClient.controls['address'].setValue(this.clients[i].address);
            this.formClient.controls['userClient'].setValue(this.clients[i].userClient);
            this.formClient.controls['favourite'].setValue(this.clients[i].favourite);
            this.formClient.controls['phone'].setValue(this.clients[i].phone);
            this.formClient.controls['email'].setValue(this.clients[i].email);
            this.x=i;
             });
        }
        
        hide = true;
        typeValue(value) {
          this.formClient.patchValue({
            type: value,
          })
          console.log(this.formClient);
        }
        somethingClick(checkbox){
          console.log(checkbox.checked);
          if(checkbox.checked == false){
            this.formClient.patchValue({
              favourite: "yes",
            }) 
          }else{
            this.formClient.patchValue({
              favourite: "no",
            })
          }

        }
        edit(){
        this.clients[this.x]=this.formClient.value;
        }

  }