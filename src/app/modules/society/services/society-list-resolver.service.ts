import { Injectable } from '@angular/core';
import { SocietyService } from './society.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SocietyListResolved } from '../models/society';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocietyListResolverService implements Resolve<SocietyListResolved> {

  constructor(private societyService: SocietyService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<SocietyListResolved> {            
    return this.societyService.getSocietys()
      .pipe(
        map(societys => ({ societys: societys })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ societys: null, error: message });
        })
      );
  }
}
