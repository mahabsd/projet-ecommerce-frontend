import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from '../app/add-user/add-user.component';
import { EditUserComponent } from '../app/edit-user/edit-user.component';
import { ListUserComponent } from '../app/list-user/list-user.component';
import { UserProfileComponent } from '../app/user-profile/user-profile.component';
import { AddFournisseurComponent } from '../app/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from '../app/edit-fournisseur/edit-fournisseur.component';
import { ListFournisseurComponent } from '../app/list-fournisseur/list-fournisseur.component';
import { AddClientComponent } from '../app/add-client/add-client.component';
import { EditClientComponent } from '../app/edit-client/edit-client.component';
import { ListClientComponent } from '../app/list-client/list-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { AddCatComponent } from './add-cat/add-cat.component';
import { ProductComponent } from './add-product/add-product.component';
import { AuthDeactivateGuard } from './services/authDeactivated.guard';
import { EditAdminComponent } from './edit-product/edit-admin.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  {
    path: '', component: AdminLayoutComponent,
    children: [{ path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' }]
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AuthDeactivateGuard],
  },
  {
    path: 'edit-user/:i',
    component: EditUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list-user',
    component: ListUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-fournisseur',
    component: AddFournisseurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-fournisseur/:i',
    component: EditFournisseurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list-fournisseur',
    component: ListFournisseurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-client',
    component: AddClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-client/:i',
    component: EditClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list-client',
    component: ListClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: DashboardComponent
  },
  {
    path: 'add-cat',
    component: AddCatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-produit',
    component: ProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-produit/:i',
    component: EditAdminComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
