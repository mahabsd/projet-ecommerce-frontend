import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  admins:any=[];
  constructor() { }

  getAdmins(){ return this.admins;}

  addAdmin(admin){this.admins.push(admin);}
}
