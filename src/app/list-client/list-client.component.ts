import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service'

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  recherche = "";
  clients;
  clientsToFilter;
  userName
  constructor(private clientService: ClientsService) { }

  ngOnInit() {
    this.clientService.getAllclients().subscribe(
      (val) => {
        this.clients = val
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
  
  supprimer(id) {
    this.clientService.deleteClient(this.clients[id]._id).subscribe(
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
    window.location.reload()
  }
}