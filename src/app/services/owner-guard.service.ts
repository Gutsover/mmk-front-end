import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class OwnerGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let currentUserToken = null;
    currentUserToken = localStorage.getItem('id_token');
    //@ts-ignore
    const currentUser: any = jwt_decode(currentUserToken);
    const idxRole = currentUser.role.indexOf('ROLE_ADMIN');
    if (idxRole < 0) {
      this.router.navigate([`${state.url.replace('adm', 'adv')}`]);
      return false;
    } else {
      return true;
    }
  }
}
