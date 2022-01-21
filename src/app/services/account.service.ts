import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public accountList$: BehaviorSubject<any> = new BehaviorSubject('');
  public accountInfo$: BehaviorSubject<any> = new BehaviorSubject('');

  getAccounts() {
    this.http
      .get(`${AppSettings.API_ENDPOINT}account/client`)
      .subscribe((res) => {
        this.accountList$.next(res);
      });
  }

  getAccount(id: Number) {
    this.http
      .get(`${AppSettings.API_ENDPOINT}account/client/${id}`)
      .subscribe((res) => {
        this.accountInfo$.next(res);
      });
    return this.accountInfo$.asObservable();
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

  constructor(private http: HttpClient) {}
}
