import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../AppSettings';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../components/snack/snack.component';

@Injectable({
  providedIn: 'root',
})
export class AdvisorsService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

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

  updateAdvisor(advisorInfo: any) {
    this.http
      .put(`${AppSettings.API_ENDPOINT}employees/advisor`, advisorInfo)
      .subscribe(
        (res) => {
          this.getAdvisorAJAX(advisorInfo.id);
          this.getAdvisorsAJAX();
        },
        (err) => {
          this.openSnackBar(
            'Vérifiez que les informations entrées soient valides',
            'error'
          );
        }
      );
  }
  deleteAdvisor(id: number) {
    this.http
      .delete(`${AppSettings.API_ENDPOINT}employees/advisor/${id}`)
      .subscribe(
        (res) => {
          this.getAdvisorAJAX(id);
          this.getAdvisorsAJAX();
        },
        (err) => {
          this.openSnackBar("Le conseiller n'a pas pu etre supprimé", 'error');
        }
      );
  }

  openSnackBar(text: string, css: string) {
    this._snackBar.openFromComponent(SnackComponent, {
      data: {
        text: text,
        css: css,
      },
      horizontalPosition: 'right',
      duration: 5 * 1000,
    });
  }
}
