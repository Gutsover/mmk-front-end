import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = localStorage.getItem('id_token');
    if (currentUser) {
      return true;
    } else {
      this.router.navigate([`${state.url.replace('adm', 'adv')}`], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
