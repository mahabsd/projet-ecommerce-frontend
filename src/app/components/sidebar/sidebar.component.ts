import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    //  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/Dashboard', title: 'Dashboard',  icon:'library_books', class: '' },
    { path: '/add-user', title: 'Ajouter un utilisateur',  icon:'person', class: '' },
    { path: '/list-user', title: 'Liste utilisateurs',  icon:'people_outline', class: '' },
    { path: '/add-fournisseur', title: 'Ajouter un Fournisseur',  icon:'person_add_alt_1', class: '' },
    { path: '/list-fournisseur', title: 'Liste de fournisseurs',  icon:'list_alt', class: '' },
    { path: '/add-client', title: 'Ajouter un client',  icon:'person_add_alt_1', class: '' },
    { path: '/list-client', title: 'Liste de clients',  icon:'list_alt', class: '' },
    { path: '/add-cat', title: 'Catégorie',  icon:'bubble_chart', class: '' },
    { path: '/add-produit', title: 'Ajouter un Produit',  icon:'addchart', class: '' },
    { path: '/list-produit', title: 'liste de produits',  icon:'list_alt', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  loggedUserRole;
  constructor( private router: Router) { }

  ngOnInit() {
    this.loggedUserRole = JSON.parse(localStorage.getItem("loggeduser")).role
    if ((this.loggedUserRole === "manager" ) ||(this.loggedUserRole === "admin" )){
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    } else {
      this.menuItems = ROUTES.filter(menuItem => menuItem.path != '/add-user');
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
}
}
