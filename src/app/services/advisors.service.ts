import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root',
})
export class AdvisorsService {
  constructor(private http: HttpClient) {}

  public advisors$: BehaviorSubject<any> = new BehaviorSubject('');
  public advisor$: BehaviorSubject<any> = new BehaviorSubject('');

  getAdvisorsAJAX(): void {
    this.http
      .get('http://localhost:8080/employees/advisors')
      .subscribe((res) => {
        this.advisors$.next(res);
      });
  }

  getAdvisors(): any {
    this.getAdvisorsAJAX();
    return this.advisors$.asObservable();
  }

  getAdvisorAJAX(id: number) {
    this.http
      .get(`${AppSettings.API_ENDPOINT}employees/advisor/${id}`)
      .subscribe((res) => {
        this.advisor$.next(res);
      });
  }

  getAdvisor(id: number): any {
    this.getAdvisorAJAX(id);
    return this.advisor$.asObservable();
  }

  createAdvisor(advisorInfo: any): Observable<Object> {
    const { name, firstname, email, password, username } = advisorInfo;

    const advisorInfoObj = {
      username: username,
      name: name,
      firstName: firstname,
      email: email,
      password: password,
    };
    return this.http.post(
      `${AppSettings.API_ENDPOINT}auth/signup/advisor`,
      advisorInfoObj
    );
  }

  updateAdvisor(advisorInfo: any): Observable<Object> {
    return this.http.put(`${AppSettings.API_ENDPOINT}advisor`, advisorInfo);
  }
}
