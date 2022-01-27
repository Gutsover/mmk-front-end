import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AuditComponent } from './view/audit/audit.component';
import { AuditClientCardComponent } from './components/audit-client-card/audit-client-card.component';
import { ClientsComponent } from './view/admin/clients/clients.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './components/header/home-header.component';
import { FormSigninHomeComponent } from './view/form-signin-home/form-signin-home.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ClientItemComponent } from './components/client-item/client-item.component';
import { ModalClientInternalTransferComponent } from './components/modals/modal-client-internal-transfer/modal-client-internal-transfer.component';
import { ModalClientExternalTransferComponent } from './components/modals/modal-client-external-transfer/modal-client-external-transfer.component';
import { AddCreditCardComponent } from './components/modals/add-credit-card/add-credit-card.component';
import { DeleteCreditCardComponent } from './components/modals/delete-credit-card/delete-credit-card.component';
import { CreateNewAccountComponent } from './components/modals/create-new-account/create-new-account.component';
import { SidebarAdvisorComponent } from './components/advisor/sidebar-advisor/sidebar-advisor.component';

import { JwtInterceptor } from './jwt-interceptor';
import { DeleteClientComponent } from './components/modals/delete-client/delete-client.component';
import { DeleteAccountComponent } from './components/modals/delete-account/delete-account.component';
import { CreateNewClientComponent } from './view/create-new-client/create-new-client.component';
import { ModalUpdateProfilComponent } from './components/modals/modal-update-profil/modal-update-profil.component';
import { DeleteAdvisorComponent } from './components/modals/delete-advisor/delete-advisor.component';
import { CreateAdvisorComponent } from './view/admin/create-advisor/create-advisor.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ModalAdvisorsIdentity } from './components/modals/modal-advisors-identity/modal-advisors-identity.component';
import { SidebarAdmComponent } from './components/sidebar-adv/sidebar-adv.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { SnackComponent } from './components/snack/snack.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { SimulationComponent } from './view/simulation/simulation.component';

import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { HistoryTransactionsComponent } from './view/admin/history-transactions/history-transactions.component';
import { NgApexchartsModule } from 'ng-apexcharts';

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
    ClientItemComponent,
    AuditComponent,
    AuditClientCardComponent,
    ClientsComponent,
    ModalClientInternalTransferComponent,
    ModalClientExternalTransferComponent,
    AddCreditCardComponent,
    DeleteCreditCardComponent,
    CreateNewAccountComponent,
    SidebarAdvisorComponent,
    DeleteClientComponent,
    DeleteAccountComponent,
    CreateNewClientComponent,
    ModalUpdateProfilComponent,
    DeleteAdvisorComponent,
    CreateAdvisorComponent,
    ErrorpageComponent,
    ModalAdvisorsIdentity,
    SidebarAdmComponent,
    CardItemComponent,
    SnackComponent,

    SimulationComponent,

    PhoneFormatPipe,
      HistoryTransactionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    NgApexchartsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
