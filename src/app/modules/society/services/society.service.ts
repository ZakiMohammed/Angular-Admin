import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Constants } from '../../shared/helper/constants';
import { Society } from '../models/society';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  url: string = Constants.API_BASE_URL + 'society/';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
  }

  postSociety(society: Society): Promise<any> {    
    return this.http.post(this.url + 'add.php', society, {headers: this.headers}).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  updateSociety(id: number, society: Society): Promise<any> {    
    return this.http.put(this.url + 'update.php' + '?id=' + id, society, {headers: this.headers}).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  getSocietys() : Observable<Society[]> {
    return this.http.get(this.url + 'get-all.php')
      .pipe(map(response => <Society[]>response));
  }

  getSociety(id: number) : Observable<Society> {
    return this.http.get(this.url + 'get-single.php' + 
      '?id=' + id)
      .pipe(map(response => <Society>response));
  }

  private extractData(res: Response) {
    return res || {};
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
  
}
