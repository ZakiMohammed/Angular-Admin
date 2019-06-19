import { Injectable } from '@angular/core';
import { Constants } from '../helper/constants';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    let storage = localStorage.getItem(Constants.LOCAL_STORAGE_AUTH);
    if (storage) {
      return true;
    }
    return false;
  }

  onLogin(auth: Auth) : void {
    localStorage.setItem(Constants.LOCAL_STORAGE_AUTH, JSON.stringify(auth));
  }

  onLogout() : void {
    localStorage.clear();
  }
}
