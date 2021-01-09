import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'app/services/product.service';

interface Type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class ProductComponent implements OnInit {


  formProduct=new FormGroup({
    name: new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    userClient:new FormControl(''),
    favourite:new FormControl(''),
    phone:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.pattern( /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%&*])[\w!@#=$%^&*]{8,}$/ )])
  });
  types: Type[] = [
    { value: 'fourniture', viewValue: 'Fourniture' },
    { value: 'food', viewValue: 'Food' },
    { value: 'sportswear', viewValue: 'Sports wear' },
  ]; 
    clients = [];
          
    constructor(private clientService: ProductsService){
     }
      
    ngOnInit() {
      this.formProduct.patchValue({
        userClient: JSON.parse(localStorage.getItem("loggeduser")),
      })
    }

    hide = true;
    typeValue(value) {
      this.formProduct.patchValue({
        type: value,
      })
      console.log(this.formProduct);
    }
    onSubmit(){
      if(!this.formProduct.valid) {return;}
      this.clientService.addProduct(this.formProduct.value).subscribe(
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