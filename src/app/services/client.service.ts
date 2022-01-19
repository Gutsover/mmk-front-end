import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  getClients(): Observable<Object> {
    return this.http.get(`${AppSettings.API_ENDPOINT}client`);
  }
  getClient(id: Number): Observable<Object> {
    return this.http.get(`${AppSettings.API_ENDPOINT}client/${id}`);
  }
  createClient(clientInfo: any): Observable<Object> {
    const {
      name,
      firstname,
      siretNbr,
      entrepriseName,
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
      entrepriseName: entrepriseName,
      birth: birth,
      phoneNumber: phoneNumber,
      address: {
        streetNumber: streetNumber,
        streetName: streetName,
        city: city,
        zipCode: zipCode,
      },
    };
    return this.http.post(`${AppSettings.API_ENDPOINT}client`, clientInfoObj);
  }
  updateClient(clientInfo: any): Observable<Object> {
    return this.http.put(`${AppSettings.API_ENDPOINT}client`, clientInfo);
  }
  constructor(private http: HttpClient) {}
}
