import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  // private server = 'http://localhost:5000/pwa-demo-25ad5/us-central1/pwaServer';
  private server = 'https://us-central1-pwa-demo-25ad5.cloudfunctions.net/pwaServer';
  $loader = new BehaviorSubject<any>(false);
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.server}/posts`).toPromise();
  }

  setData(data) {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '**');
    return this.http.post(`${this.server}/posts`, JSON.stringify(data), {headers: headers}).toPromise();
  }

  setLoader(val: boolean) {
    this.$loader.next(val);
  }
}
