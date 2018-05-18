import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';

@Injectable()
export class SendDataService {
  url = "api/books";
  constructor(private http:Http) { }

  postnewproject(obj){
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this.url, obj)
                   .map((response)=>response.json());
  };

  fetchdata(){
    return this.http.get('assets/sample.json').map(function(response){
        return response.json();
    });
  }


}
