import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service'

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

        recherche="";
        clients;
        clientsToFilter;
        constructor(private clientService: ClientsService){  }
      
        ngOnInit() {
          this.clients = this.clientService.getAllclients();
          this.clientsToFilter = [...this.clients];
        }
        supprimer(id){
          this.clients.clientService.deleteClient(id);
}
}