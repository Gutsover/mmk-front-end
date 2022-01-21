import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  public clientList$: BehaviorSubject<any> = new BehaviorSubject('');
  public clientInfo$: BehaviorSubject<any> = new BehaviorSubject('');

  getClientsAJAX() {
    this.http.get(`${AppSettings.API_ENDPOINT}client`).subscribe((res) => {
      this.clientList$.next(res);
    });
  }

  getClients() {
    this.getClientsAJAX();
    return this.clientList$.asObservable();
  }

  getClientAJAX(id: Number) {
    this.http
      .get(`${AppSettings.API_ENDPOINT}client/${id}`)
      .subscribe((res) => {
        this.clientInfo$.next(res);
      });
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
    };

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
        this.getClientsAJAX();
        this.getClientAJAX(clientInfo.id);
      });
  }
  deleteClient(id: Number) {
    this.http
      .delete(`${AppSettings.API_ENDPOINT}client/${id}`)
      .subscribe(() => {
        this.getClientsAJAX();
      });
  }
  constructor(private http: HttpClient) {}
}
