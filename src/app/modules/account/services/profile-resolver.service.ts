import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProfileResolved } from '../models/profile';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<ProfileResolved> {

  constructor(private profileService: ProfileService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ProfileResolved> {
            
    const id = route.paramMap.get('id');
    
    if (isNaN(+id)) {
      const message = `Profile id was not a number: ${id}`;
      console.error(message);
      return of({ profile: null, error: message });
    }

    return this.profileService.getProfile(+id || 1)
      .pipe(
        map(profile => ({ profile: profile })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ profile: null, error: message });
        })
      );
  }
}
