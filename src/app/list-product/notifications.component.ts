import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/services/product.service';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  recherche = "";
  produits;
  produitsToFilter;
  userName
  constructor(private produitService: ProductsService) { }

  ngOnInit() {
    this.produitService.getAllProducts().subscribe(
      (val) => {
        this.produits = val
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
  
  supprimer(id) {
    this.produitService.deleteProduct(this.produits[id]._id).subscribe(
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
    window.location.reload()
  }
}