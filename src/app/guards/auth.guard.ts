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
    let storage = localStorage.getItem(Constants.LOCAL_STORAGE_AUTH);
    let urls = ['/login', '/register', '/forgot-password'];

    if (storage) {
      isLoggedIn = true;
    }

    if (isLoggedIn) {
      if (urls.find(i => i === state.url)) {
        this.router.navigate(['/dashboard']);
      }
      return true;
    } else {
      if (urls.find(i => i === state.url)) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }    
  }

}
