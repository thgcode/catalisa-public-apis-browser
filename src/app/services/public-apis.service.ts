import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { PublicAPIsHealthStatus } from '../models/public-apis-health-status';

@Injectable({
  providedIn: 'root'
})
export class PublicAPIsService {
  /* Since I couldn't get the Public APIs' base URL to work with CORS, I set up
    the base URL of the service as an Angular proxy that will forward the request
    to Public APIs itself. If I manage to get CORS to work, this proxy can be removed without problems. */
  private baseURL: string = 'http://localhost:4200/api/';

  constructor(private httpClient: HttpClient) { }

  private requestOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private getFromAPI <T>(APIFunction: string): Observable <T> {
    return this.httpClient.get <T>(`${this.baseURL}${APIFunction}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  public getAPIHealthStatus(): Observable <PublicAPIsHealthStatus> {
    return this.getFromAPI <PublicAPIsHealthStatus>('health');
  }

  public getCategories(): Observable <string[]> {
    return this.getFromAPI <string []>('categories');
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
