import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
  fournisseurs:any=[];
  user;
  httpHeaders;
  options;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('loggeduser'));
    this.httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer' + this.user.token
    });
    this.options = { headers: this.httpHeaders }
  }
  getFournisseurs(){ return this.fournisseurs;}

  addFournisseur(fournisseur){this.fournisseurs.push(fournisseur);}
}
