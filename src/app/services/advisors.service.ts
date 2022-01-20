import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root',
})
export class AdvisorsService {
  constructor(private http: HttpClient) {}

  getAdvisors(): Observable<any> {
    return this.http.get('http://localhost:8080/employees/advisors');
  }

  getAdvisor(id: Number): Observable<Object> {
    return this.http.get(`${AppSettings.API_ENDPOINT}advisor/${id}`);
  }

  createAdvisor(advisorInfo: any): Observable<Object> {
    const {
      name,
      firstname,
      email,
      password,
      username
    } = advisorInfo;

    const advisorInfoObj = {
      username: username,
      name: name,
      firstName: firstname,
      email: email,
      password: password,
    };
    console.log(advisorInfoObj);
    return this.http.post(`${AppSettings.API_ENDPOINT}auth/signup/advisor`, advisorInfoObj);
  }
}
