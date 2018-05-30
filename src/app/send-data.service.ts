import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SendDataService {
  url = 'http://localhost:3000/newproduct';
  constructor(private http: Http) {}

  postnewproject(obj) {
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.url, obj).map((response) => response);
  };

  fetchdata() {
    return this.http.get('http://localhost:3000/product/TATA').map(function(response) {
      return response.json();
    });
  }

  showdata(){
    return this.http.get('http://localhost:3000/product/TATA/InitialData').map(function(response) {
      return response.json();
    });
  }
}
