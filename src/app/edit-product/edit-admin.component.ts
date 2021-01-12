import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'app/services/product.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {


  formproduit = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    category: new FormControl('', [Validators.required]),
    userID: new FormControl('', [Validators.required]),
  }
  );
  produits
  x: number;
  cats;
  catsreceived;
  constructor(private produitService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.produitService.getAllProducts()
      .subscribe(
        (res) => {
          this.produits = res;
          console.log("POST call successful value returned in body",
            this.produits);
          this.route.paramMap.subscribe(param => {
            let i = +param.get('i'); console.log(i);
            this.formproduit.patchValue({
              name: this.produits[i].name,
              price: this.produits[i].price,
              quantity: this.produits[i].quantity,
              description: this.produits[i].description,
              category: this.produits[i].category,
              userID: this.produits[i].userID
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
    console.log(this.produits);
    this.produitService.getAllcats()
    .subscribe(
      (val) => {
        this.catsreceived = val
        console.log("POST call successful value returned in body",
          val);
                              console.log("this.catsreceived",
                              this.catsreceived);              
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  
  }

  hide = true;


  onSubmit() {
    this.produitService.updateProduct(this.produits[this.x]._id, this.formproduit.value).subscribe(
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
    this.router.navigateByUrl('/notifications');
  }

} 