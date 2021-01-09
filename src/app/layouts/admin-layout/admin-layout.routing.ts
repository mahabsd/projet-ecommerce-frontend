import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AddUserComponent } from '../../add-user/add-user.component';
import { EditUserComponent } from '../../edit-user/edit-user.component';
import { ListUserComponent } from '../../list-user/list-user.component';
import { AddFournisseurComponent } from '../../add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from '../../edit-fournisseur/edit-fournisseur.component';
import { ListFournisseurComponent } from '../../list-fournisseur/list-fournisseur.component';
import { AddClientComponent } from '../../add-client/add-client.component';
import { EditClientComponent } from '../../edit-client/edit-client.component';
import { ListClientComponent } from '../../list-client/list-client.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [ 
    // { path: 'dashboard',      component: DashboardComponent },
    { path: 'add-user',   component: AddUserComponent },
    { path: 'edit-user',   component: EditUserComponent },
    { path: 'list-user',     component: ListUserComponent },
    { path: 'add-fournisseur',   component: AddFournisseurComponent },
    { path: 'edit-fournisseur',   component: EditFournisseurComponent },
    { path: 'list-fournisseur',     component: ListFournisseurComponent },
    { path: 'add-client',   component: AddClientComponent },
    { path: 'edit-client',   component: EditClientComponent },
    { path: 'list-client',     component: ListClientComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
