import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from './constants';

@Injectable()
export class HttpService {

  private httpOptions: any = {};

  constructor(private http: HttpClient) {
  }

  get(url: string, para?: any): Observable<any> {
    return this.http.get(Constants.API_PREFIX + url, {params: para});
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(Constants.API_PREFIX + url, body);
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(Constants.API_PREFIX + url, body);
  }

  delete(url: string, body?: any): Observable<any> {
    this.httpOptions.body = body;
    return this.http.delete(Constants.API_PREFIX + url, this.httpOptions);
  }

}
