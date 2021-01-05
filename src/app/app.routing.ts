import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
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
import { AddAdminComponent } from './sign-up/sign-up.component';
import { loginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: loginComponent },
  { path: 'sign-up', component: AddAdminComponent },
  { path: '',component: AdminLayoutComponent,children: [{path: '',loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}]},
  { path: 'user-profile',component: UserProfileComponent},
  { path: 'add-user',component: AddUserComponent},
  { path: 'edit-user/:i',component: EditUserComponent},
  { path: 'list-user',component: ListUserComponent},
  { path: 'add-fournisseur',component: AddFournisseurComponent},
  { path: 'edit-fournisseur/:i',component: EditFournisseurComponent},
  { path: 'list-fournisseur',component: ListFournisseurComponent},
  { path: 'add-client',component: AddClientComponent},
  { path: 'edit-client/:i',component: EditClientComponent},
  { path: 'list-client',component: ListClientComponent},
  { path: 'dashboard',component: DashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
