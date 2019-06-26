import { Injectable } from '@angular/core';
import { CustomerService } from './customer.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerResolved } from '../models/customer';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolverService implements Resolve<CustomerResolved> {

  constructor(private customerService: CustomerService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<CustomerResolved> {
            
    const id = route.paramMap.get('id');
    
    if (isNaN(+id)) {
      const message = `Customer id was not a number: ${id}`;
      console.error(message);
      return of({ customer: null, error: message });
    }

    return this.customerService.getCustomer(+id)
      .pipe(
        map(customer => ({ customer: customer })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ customer: null, error: message });
        })
      );
  }
}
