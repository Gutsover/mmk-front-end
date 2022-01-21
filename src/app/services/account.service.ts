import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public accountInfo$: BehaviorSubject<any> = new BehaviorSubject('');


  getAccount(id: Number) {
    this.http
      .get(`${AppSettings.API_ENDPOINT}account/client/${id}`)
      .subscribe((res) => {
        this.accountInfo$.next(res);
      });
    return this.accountInfo$.asObservable();
  }


  constructor(private http: HttpClient) { }
}
