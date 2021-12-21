import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { GreetingComponent } from './components/greeting/greeting.component';
import { LocationComponent } from './components/location/location.component';
import { TodoComponent } from './components/todo/todo.component';
import { AgenciesComponent } from './components/agencies/agencies.component'

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
    GreetingComponent,
    LocationComponent,
    TodoComponent,
    AgenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
