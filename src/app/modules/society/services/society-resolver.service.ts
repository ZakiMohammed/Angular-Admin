import { Injectable } from '@angular/core';
import { SocietyService } from './society.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SocietyResolved } from '../models/society';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocietyResolverService implements Resolve<SocietyResolved> {

  constructor(private societyService: SocietyService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<SocietyResolved> {
            
    const id = route.paramMap.get('id');
    
    if (isNaN(+id)) {
      const message = `Society id was not a number: ${id}`;
      console.error(message);
      return of({ society: null, error: message });
    }

    return this.societyService.getSociety(+id)
      .pipe(
        map(society => ({ society: society })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ society: null, error: message });
        })
      );
  }
}
