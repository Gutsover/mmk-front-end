import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppSettings } from '../AppSettings';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  getAccountAJAX(clientId: Number) {
    this.http.get(`${AppSettings.API_ENDPOINT}account/client/${clientId}`).subscribe((res) => {
      this.clientService.accountList$.next(res);
    })
  }

  getAccounts(clientId: Number): Observable<any> {
    this.getAccountAJAX(clientId);
    return this.clientService.accountList$.asObservable();
  }

  createAccount(typeA: string, clientId: Number) {
    let url = '';
    const obj : any = {
      sold: 0,
      clientId: clientId
    }
    switch (typeA) {
      case 'current':
        url = `${AppSettings.API_ENDPOINT}account/current`;
        break;
      case 'saving':
        url = `${AppSettings.API_ENDPOINT}account/saving`;
        break;
      default:
        throw new Error('Error');
        
    }
    return this.http.post(url, obj);;
  }

  constructor(private http: HttpClient, private clientService: ClientService) {}
}
