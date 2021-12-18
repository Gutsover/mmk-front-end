import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

login(loginObj: Object): Observable<Object>{
  return this.http.post("http://localhost:8080/auth/signin", loginObj);
}

 constructor(private http: HttpClient) { } 
}
