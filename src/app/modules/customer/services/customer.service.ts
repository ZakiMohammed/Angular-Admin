import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Constants } from '../../shared/helper/constants';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = Constants.API_BASE_URL + 'customer/';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
  }

  postCustomer(customer: Customer): Promise<any> {    
    return this.http.post(this.url + 'add.php', customer, {headers: this.headers}).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  updateCustomer(customer: Customer): Promise<any> {    
    return this.http.post(this.url + 'update.php', customer, {headers: this.headers}).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  getCustomers() : Observable<Customer[]> {
    return this.http.get(this.url + 'get-all.php')
      .pipe(map(response => <Customer[]>response));
  }

  getCustomer(id: number) : Observable<Customer> {
    return this.http.get(this.url + 'get-single.php' + 
      '?id=' + id)
      .pipe(map(response => <Customer>response));
  }

  private extractData(res: Response) {
    return res || {};
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
