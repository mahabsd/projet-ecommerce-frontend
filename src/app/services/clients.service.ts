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

   }

   addClient(data) {
    console.log(data);
    return this.http.post(this.clientsUrl + "clients/client/add/", data);
  }

  getClient(id) {
    return this.http.get(this.clientsUrl + "clients/client/" + id);
  }
  updateClient(id) {
    return this.http.get(this.clientsUrl + "clients/client/update" + id);
  }
  deleteClient(id) {
    return this.http.delete(this.clientsUrl + "clients/client/delete" + id);
  }
  getAllclients() {
    return this.http.get(this.clientsUrl + "clients/getAllclients");
  }
}
