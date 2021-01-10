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


  formProduct = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    userClient: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('', [Validators.required]),
  });

  products;

  constructor(private productService: ProductsService) {
  }
  catsreceived = [];
cats
  ngOnInit() {
    this.productService.getAllcats().subscribe(
      (val) => {
        this.cats = val
          console.log("POST call successful value returned in body", 
                      this.cats[0].name );
                      for (let index = 0; index < this.cats.length; index++) {
                         this.catsreceived[index] = this.cats[index].name;
                        
                      }
                      console.log(this.catsreceived);
                      

      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });

  }

  onSubmit() {
    this.formProduct.patchValue({
      userClient: JSON.parse(localStorage.getItem("loggeduser"))._id,
    })
    this.productService.addProduct(this.formProduct.value).subscribe(
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