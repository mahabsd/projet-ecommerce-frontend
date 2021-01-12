import { Component, OnInit } from '@angular/core';
import { FournisseursService } from '../services/fournisseurs.service'

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  recherche = "";
  fournisseurs;
  fournisseursToFilter;
  constructor(private fournisseurService: FournisseursService) { }

  ngOnInit() {
    this.fournisseurService.getAllFournisseurs().subscribe(
      (val) => {
        this.fournisseurs = val
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
  supprimer(i) {
    this.fournisseurService.deleteFournisseur(this.fournisseurs[i]._id).subscribe(
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