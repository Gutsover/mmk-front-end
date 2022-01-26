import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry, takeWhile } from 'rxjs/operators';
import { AppSettings } from '../AppSettings';
import { AuthGuardService } from './auth-guard.service';
import {SnackComponent} from "../components/snack/snack.component";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    console.log(this.authguard.getCurrentUser().idEmployee);
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
      });
  }
  updateClient(clientInfo: any) {
    this.http
      .put(`${AppSettings.API_ENDPOINT}client`, clientInfo)
      .subscribe(() => {
        this.getClientByAdvisor(this.authguard.getCurrentUser().idEmployee);
        this.getClientAJAX(clientInfo.id);
        this.openSnackBar("Client modifié !", "success");
      },
        (error => this.openSnackBar("Vérifiez que les informations entrées soient valides", "error")));
  }
  deleteClient(id: Number) {
    this.http
      .delete(`${AppSettings.API_ENDPOINT}client/${id}`)
      .subscribe(() => {
        this.getClientByAdvisor(this.authguard.getCurrentUser().idEmployee);
        this.openSnackBar("Client supprimé !", "success");
      },
        (error => this.openSnackBar("Vérifiez que les comptes soient vides et les cartes désactivées", "error")));
  }
  constructor(private http: HttpClient, private authguard: AuthGuardService, private _snackBar: MatSnackBar) {}

  openSnackBar(text: string, css: string) {
    this._snackBar.openFromComponent(SnackComponent, {
      data: {
        text: text,
        css: css
      },
      horizontalPosition: 'right',
      duration: 5 * 1000,
    });
  }
}
