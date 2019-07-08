import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Constants } from '../../shared/helper/constants';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url: string = Constants.API_BASE_URL + 'profile/';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
  }

  updateProfile(profile: Profile): Promise<any> {    
    return this.http.post(this.url + 'update.php', profile, {headers: this.headers}).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  getProfile(id: number) : Observable<Profile> {
    return this.http.get(this.url + 'get-single.php' + 
      '?id=' + id)
      .pipe(map(response => <Profile>response));
  }

  private extractData(res: Response) {
    return res || {};
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
