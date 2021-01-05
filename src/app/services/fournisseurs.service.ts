import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
  fournisseurs:any=[];
  constructor() { }

  getFournisseurs(){ return this.fournisseurs;}

  addFournisseur(fournisseur){this.fournisseurs.push(fournisseur);}
}
