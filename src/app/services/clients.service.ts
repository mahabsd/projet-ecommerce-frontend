import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients:any=[];
  constructor() { }

  getClients(){ return this.clients;}

  addClient(client){this.clients.push(client);}
}
