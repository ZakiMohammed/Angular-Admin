import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../helper/constants';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {

    let urls = ['/login', '/register', '/forgot-password'];

    if (this.auth.isLoggedIn()) {
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
