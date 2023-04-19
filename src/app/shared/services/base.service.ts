import { Injectable } from '@angular/core';
import { Donations } from './../models/danation-case';
import { environment } from './../../../environments/environment.prod';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export abstract class BaseService {
  protected baseUrl: string | undefined;

  constructor(private http: HttpClient) { }

  getData(): Observable<Array<Donations>> {
    this.baseUrl = environment.url;
    return this.http.get<Array<Donations>>(`${this.baseUrl}/data`,).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
