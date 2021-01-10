import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'app/services/product.service';

declare const google: any;

interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}
@Component({
    selector: 'app-add-cat',
    templateUrl: './add-cat.component.html',
    styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

    constructor(private catServ: ProductsService) { }
    nom;

    formCat = new FormGroup({
        name: new FormControl(''),
        userID: new FormControl(''),
    });
    ngOnInit() {
    }

    onSubmit() {

        this.formCat.patchValue({
            userID: JSON.parse(localStorage.getItem("loggeduser"))._id
        })
        this.catServ.addcat(this.formCat.value).subscribe(
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