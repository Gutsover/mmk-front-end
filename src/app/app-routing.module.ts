import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSigninHomeComponent } from './view/form-signin-home/form-signin-home.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ClientViewComponent } from './view/client-view/client-view.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: FormSigninHomeComponent },
  { path: 'client', component: ClientViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
