import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common'; 

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    AppRoutingModule,MatInputModule,
    AgmCoreModule.forRoot({ apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'})
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AddUserComponent,
    EditUserComponent,
    AddClientComponent,
    AddFournisseurComponent,
    EditClientComponent,
    EditFournisseurComponent,
    EditAdminComponent,
    ListClientComponent,
    ListFournisseurComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }