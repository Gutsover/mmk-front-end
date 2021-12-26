import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  getClients(): Observable<Object> {
    return this.http.get('http://localhost:8080/client');
  }
  getClient(id: Number): Observable<Object> {
    return this.http.get('http://localhost:8080/client/1');
  }
  constructor(private http: HttpClient) {}
}
