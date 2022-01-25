import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import jwt_decode from 'jwt-decode';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  user = new User();

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = localStorage.getItem('id_token');
    //@ts-ignore
    const currentUserJwt = jwt_decode(currentUser);
    //@ts-ignore
    const expired = Date.now() >= currentUserJwt.exp * 1000;
    if (currentUser && !expired) {
      //@ts-ignore
      this.user = currentUserJwt;
      console.log(this.user);
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
  getCurrentUser() {
    return this.user;
  }
}
