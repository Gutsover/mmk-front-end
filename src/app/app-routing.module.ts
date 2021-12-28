import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormSigninHomeComponent} from './view/form-signin-home/form-signin-home.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {ClientViewComponent} from './view/client-view/client-view.component';
import {AdvisorsListComponent} from './view/advisors-list/advisors-list.component';
import {AuditComponent} from './view/audit/audit.component';
const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: FormSigninHomeComponent},
  {path: 'client', component: ClientViewComponent},
  {path: 'advisors', component: AdvisorsListComponent},
  {path: 'adm/audit', component: AuditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
