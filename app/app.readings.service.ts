import { resetFakeAsyncZone } from '@angular/core/testing';
import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Reading } from './app.reading';

@Injectable()
export class ReadingsService {
  //private baseUrl: string = 'http://192.168.1.83:8080/api'; //{?page,size,sort}';
  private baseUrl: string = 'http://localhost:8080/api'; //{?page,size,sort}';

  constructor(private http: Http) { }

  public getDailyReadings(): Observable<Reading[]> {    
//res.json().content as Reading[] <- return an array of Readings
//res.json().result as Reading[] <- returns an array of objects with content link and paging etc.
    return this.http.get(`${this.baseUrl}/readings`)
      .map((res: Response) => res.json().content as Reading[])
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(handleError);
  }

//   private getHeaders() {
//     let headers = new Headers();
//     headers.append('Accept', 'application/json');
//     return headers;
//   }
// }
}

// this could also be a private method of the component class
function handleError(error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Could not fetch readings`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
