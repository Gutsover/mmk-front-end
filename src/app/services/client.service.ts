import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry, takeWhile } from 'rxjs/operators';
import { AppSettings } from '../AppSettings';
import { AuthGuardService } from './auth-guard.service';
import { SnackComponent } from '../components/snack/snack.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  public clientList$: BehaviorSubject<any> = new BehaviorSubject('');
  public clientInfo$: BehaviorSubject<any> = new BehaviorSubject('');

  public accountList$: BehaviorSubject<any> = new BehaviorSubject('');
  public accountInfo$: BehaviorSubject<any> = new BehaviorSubject('');

  getClientsAJAX() {
    this.http.get(`${AppSettings.API_ENDPOINT}client`).subscribe((res) => {
      this.clientList$.next(res);
    });
  }

  getClientAdm() {
    this.getClientsAJAX();
    return this.clientList$.asObservable();
  }
  getClients() {
    this.getClientByAdvisor(this.authguard.getCurrentUser().idEmployee);
    //this.getClientsAJAX();
    return this.clientList$.asObservable();
  }

  getClientAJAX(id: Number) {
    this.http
      .get(`${AppSettings.API_ENDPOINT}client/${id}`)
      .subscribe((res) => {
        this.clientInfo$.next(res);
      });
  }

  getClientByAdvisor(id: Number) {
    this.http
      .get(
        `${AppSettings.API_ENDPOINT}client/advisor/${
          this.authguard.getCurrentUser().idEmployee
        }`
      )
      .subscribe((res) => {
        this.clientList$.next(res);
      });
    return this.clientList$.asObservable();
  }

  getClient(id: Number) {
    this.getClientAJAX(id);
    return this.clientInfo$.asObservable();
  }

  createClient(clientInfo: any) {
    const {
      name,
      firstname,
      siretNbr,
      enterpriseName,
      isEnterprise,
      birth,
      streetNumber,
      streetName,
      city,
      zipCode,
      phoneNumber,
    } = clientInfo;

    const clientInfoObj = {
      name: name,
      firstname: firstname,
      siretNbr: siretNbr,
      enterpriseName: enterpriseName,
      isEnterprise: isEnterprise,
      birth: birth,
      phoneNumber: phoneNumber,
      address: {
        streetNumber: streetNumber,
        streetName: streetName,
        city: city,
        zipCode: zipCode,
      },
      advisorId: this.authguard.getCurrentUser().idEmployee,
    };
    console.log(clientInfoObj);
    this.http
      .post(`${AppSettings.API_ENDPOINT}client`, clientInfoObj)
      .subscribe(() => {
        this.getClients();
        this.openSnackBar("Le client a bien ??t?? cr????", "success");
      },
        error => this.openSnackBar("Vous avez trop de clients !", "error"));
  }
  updateClient(clientInfo: any) {
    this.http.put(`${AppSettings.API_ENDPOINT}client`, clientInfo).subscribe(
      () => {
        if (this.authguard.getCurrentUser().role.indexOf('ROLE_ADMIN') >= 0) {
          this.getClientsAJAX();
        } else {
          this.getClientByAdvisor(this.authguard.getCurrentUser().idEmployee);
        }
        this.getClientAJAX(clientInfo.id);
        this.openSnackBar('Client modifi?? !', 'success');
      },
      (error) =>
        this.openSnackBar(
          'V??rifiez que les informations entr??es soient valides',
          'error'
        )
    );
  }
  deleteClient(id: Number) {
    this.http.delete(`${AppSettings.API_ENDPOINT}client/${id}`).subscribe(
      () => {
        if (this.authguard.getCurrentUser().role.indexOf('ROLE_ADMIN') >= 0) {
          this.getClientsAJAX();
        } else {
          this.getClientByAdvisor(this.authguard.getCurrentUser().idEmployee);
        }
        this.openSnackBar('Client supprim?? !', 'success');
      },
      (error: any) => {
        this.openSnackBar(
          'V??rifiez que les comptes soient vides et les cartes d??sactiv??es',
          'error'
        );
      }
    );
  }

  constructor(
    private http: HttpClient,
    private authguard: AuthGuardService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(text: string, css: string) {
    this._snackBar.openFromComponent(SnackComponent, {
      data: {
        text: text,
        css: css,
      },
      horizontalPosition: 'right',
      duration: 5 * 1000,
    });
  }
}
