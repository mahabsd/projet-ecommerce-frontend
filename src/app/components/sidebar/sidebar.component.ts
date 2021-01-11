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
    { path: '/Dashboard', title: 'Dashboard',  icon:'library_books', class: '' },
    { path: '/add-user', title: 'Ajouter utilisateur',  icon:'person', class: '' },
    { path: '/list-user', title: 'Liste utilisateurs',  icon:'content_paste', class: '' },
    { path: '/add-fournisseur', title: 'Ajouter Fournisseur',  icon:'content_paste', class: '' },
    { path: '/list-fournisseur', title: 'Liste de fournisseurs',  icon:'content_paste', class: '' },
    { path: '/add-client', title: 'Ajouter client',  icon:'content_paste', class: '' },
    { path: '/list-client', title: 'Liste de clients',  icon:'content_paste', class: '' },
   { path: '/add-cat', title: 'Catégorie',  icon:'bubble_chart', class: '' },
   { path: '/produit', title: 'Produit',  icon:'content_paste', class: '' },

    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
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
