import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  _currentUser?: any;

  login(loginObj: any): Observable<any> {
    return this.http.post('http://localhost:8080/auth/signin', loginObj);
  }

  constructor(private http: HttpClient) {}

  get currentUser(): any {
    return this._currentUser;
  }

  set currentUser(user) {
    this._currentUser = user;
  }
}
