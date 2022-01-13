import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private http: HttpClient) {}

  getAuditResult(): Observable<any> {
    return this.http.get("http://localhost:8080/agency/audit")
  }
}
