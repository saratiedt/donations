import { Injectable } from '@angular/core';
import { Donations } from './../models/danation-case';
import { environment } from './../../../environments/environment.prod';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export abstract class BaseService {
  protected baseUrl: string | undefined;

  constructor(private http: HttpClient) { }

  getData(): Observable<Array<Donations>> {
    return this.http.get<Array<Donations>>(`${this.baseUrl}/data`,);
  }

}
