import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients:any=[];
  client;
  httpHeaders;
  options;
  clientsUrl: string = environment.basUrl;
 
  constructor(private http: HttpClient) {
    this.client = JSON.parse(localStorage.getItem('loggeduser'));    
    this.httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.client.token
    });
    this.options = { headers:this.httpHeaders }
  }

   addClient(data) {
    console.log(data);
    return this.http.post(this.clientsUrl + "clients/client/add/", data, this.options);
  }

  getClient(id) {
    return this.http.get(this.clientsUrl + "clients/client/" + id, this.options);
  }
  updateClient(id, data) {
    return this.http.put(this.clientsUrl + "clients/client/update/" + id, data, this.options);
  }
  deleteClient(id) {
    return this.http.delete(this.clientsUrl + "clients/client/delete/" + id, this.options);
  }
  getAllclients() {
    return this.http.get(this.clientsUrl + "clients/getAllclients", this.options);
  }
}
