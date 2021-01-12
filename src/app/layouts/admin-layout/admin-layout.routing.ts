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
import { ProductComponent } from '../../add-product/add-product.component';
import { AddCatComponent } from '../../add-cat/add-cat.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AuthGuard } from 'app/services/auth.guard';

export const AdminLayoutRoutes: Routes = [ 
    // { path: 'dashboard',      component: DashboardComponent },
    { path: 'add-user',   component: AddUserComponent,  canActivate: [AuthGuard]  },
    { path: 'edit-user',   component: EditUserComponent,  canActivate: [AuthGuard]  },
    { path: 'list-user',     component: ListUserComponent, canActivate: [AuthGuard] },
    { path: 'add-fournisseur',   component: AddFournisseurComponent,  canActivate: [AuthGuard]  },
    { path: 'edit-fournisseur',   component: EditFournisseurComponent,  canActivate: [AuthGuard]  },
    { path: 'list-fournisseur',     component: ListFournisseurComponent ,  canActivate: [AuthGuard] },
    { path: 'add-client',   component: AddClientComponent,  canActivate: [AuthGuard]  },
    { path: 'edit-client',   component: EditClientComponent,  canActivate: [AuthGuard] },
    { path: 'list-client',     component: ListClientComponent,  canActivate: [AuthGuard] },
    { path: 'Dashboard',      component: TypographyComponent,     canActivate: [AuthGuard]},
    { path: 'add-product',          component: ProductComponent,  canActivate: [AuthGuard]  },
    { path: 'add-cat',           component: AddCatComponent,  canActivate: [AuthGuard]  },
    { path: 'notifications',  component: NotificationsComponent ,  canActivate: [AuthGuard] },
];
