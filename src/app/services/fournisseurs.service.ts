import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
  fournisseurs: any = [];
  user;
  httpHeaders;
  options;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('loggeduser'));
    this.httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.user.token
    });
    this.options = { headers: this.httpHeaders }
  }
  fournisseursUrl: string = environment.basUrl;

  addFournisseur(data) {
    console.log(data);
    return this.http.post(this.fournisseursUrl + "fournisseurs/fournisseur/add/", data, this.options);
  }

  getFournisseur(id) {
    return this.http.get(this.fournisseursUrl + "fournisseurs/fournisseur/" + id, this.options);
  }
  updateFournisseur(id, data) {
    return this.http.put(this.fournisseursUrl + "fournisseurs/fournisseur/update/" + id, data, this.options);
  }
  deleteFournisseur(id) {
    return this.http.delete(this.fournisseursUrl + "fournisseurs/fournisseur/delete/" + id, this.options);
  }
  getAllFournisseurs() {
    return this.http.get(this.fournisseursUrl + "fournisseurs/getAllfournisseurs", this.options);
  }
}
