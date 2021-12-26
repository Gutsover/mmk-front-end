import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './components/header/home-header.component';
import { FormSigninHomeComponent } from './view/form-signin-home/form-signin-home.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HomeLogoComponent } from './components/home-logo/home-logo.component';
import { HomeLoginComponent } from './components/home-login/home-login.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientIdentityComponent } from './components/client-identity/client-identity.component';
import { ClientAccountComponent } from './components/client-account/client-account.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ClientViewComponent } from './view/client-view/client-view.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { LocationComponent } from './components/location/location.component';
import { TodoComponent } from './components/todo/todo.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalClientIdentityComponent } from './components/modals/modal-client-identity/modal-client-identity.component';
import { AdvisorsListComponent } from './view/advisors-list/advisors-list.component';
import { AdvisorsComponent } from './components/admin/advisors/advisors.component';
import { AdvisorsIdentityComponent } from './components/admin/advisors-identity/advisors-identity.component';
import { AdvisorsClientListComponent } from './components/admin/advisors-client-list/advisors-client-list.component';
import { ClientItemComponent } from './components/client-item/client-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    FormSigninHomeComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    HomeLogoComponent,
    HomeLoginComponent,
    ClientsListComponent,
    ClientIdentityComponent,
    ClientAccountComponent,
    ClientCardComponent,
    ClientViewComponent,
    GreetingComponent,
    LocationComponent,
    TodoComponent,
    AgenciesComponent,
    ModalClientIdentityComponent,
    AdvisorsListComponent,
    AdvisorsComponent,
    AdvisorsIdentityComponent,
    AdvisorsClientListComponent,
    ClientItemComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
