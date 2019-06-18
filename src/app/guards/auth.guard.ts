import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../modules/shared/helper/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let isLoggedIn = false;

    let some = Constants.LOCAL_STORAGE_LOGIN;

    if (isLoggedIn) {
      if (state.url === '/login' || state.url === '/register') {
        this.router.navigate(['/dashboard']);
      }
      return true;
    } else {
      if (state.url === '/login' || state.url === '/register') {
       return true; 
      }      
      this.router.navigate(['/login']);
      return false;
    } 
  }

}
