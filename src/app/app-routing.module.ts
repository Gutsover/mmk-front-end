import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSigninHomeComponent } from './view/form-signin-home/form-signin-home.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ClientViewComponent } from './view/client-view/client-view.component';
import { AdvisorsListComponent } from './view/advisors-list/advisors-list.component';
import { AuditComponent } from './view/audit/audit.component';
import { ClientsComponent } from './view/admin/clients/clients.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreateNewClientComponent } from './view/create-new-client/create-new-client.component';
import { CreateAdvisorComponent } from './view/admin/create-advisor/create-advisor.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
const routes: Routes = [

  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: FormSigninHomeComponent },
  {
    path: 'adm/dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'adv/dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuardService],
  },

  {
    path: 'adv/client',
    component: ClientViewComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'adv/add-client',
    component: CreateNewClientComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'adm/advisors',
    component: AdvisorsListComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'adm/audit',
    component: AuditComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'adm/clients',
    component: ClientsComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'adm/add-advisor',
    component: CreateAdvisorComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
