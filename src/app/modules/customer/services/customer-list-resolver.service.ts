import { Injectable } from '@angular/core';
import { CustomerService } from './customer.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerListResolved } from '../models/customer';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerListResolverService implements Resolve<CustomerListResolved> {

  constructor(private customerService: CustomerService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<CustomerListResolved> {            
    return this.customerService.getCustomers()
      .pipe(
        map(customers => ({ customers: customers })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ customers: null, error: message });
        })
      );
  }
}
