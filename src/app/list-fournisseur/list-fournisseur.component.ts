import { Component, OnInit } from '@angular/core';
import { FournisseursService } from '../services/fournisseurs.service'

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

      recherche="";
      fournisseurs;
      fournisseursToFilter;
      constructor(private fournisseurService: FournisseursService){  }
    
      ngOnInit() {
        this.fournisseurs = this.fournisseurService.getFournisseurs();
        this.fournisseursToFilter = [...this.fournisseurs];
      }
      supprimer(i){
        this.fournisseurs.splice(i,1);
      }
    }