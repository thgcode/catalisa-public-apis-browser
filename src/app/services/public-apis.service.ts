import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { PublicAPIsHealthStatus } from '../models/public-apis-health-status';
import { PublicAPIsSearchQuery } from '../models/public-apis-search-query';
import { PublicAPIsSearchResults } from '../models/public-apis-search-results';

@Injectable({
  providedIn: 'root'
})
export class PublicAPIsService {
  /* Since I couldn't get the Public APIs' base URL to work with CORS, I set up
    the base URL of the service as an Angular proxy that will forward the request
    to Public APIs itself. If I manage to get CORS to work, this proxy can be removed without problems. */
  private baseURL = '/api/';

  private requestOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  private getFromAPI <T>(APIFunction: string): Observable <T> {
    return this.httpClient.get <T>(`${this.baseURL}${APIFunction}`)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  public getAPIHealthStatus(): Observable <PublicAPIsHealthStatus> {
    return this.getFromAPI <PublicAPIsHealthStatus>('health');
  }

  public getCategories(): Observable <string[]> {
    return this.getFromAPI <string []>('categories');
  }

  public searchEntries(query: PublicAPIsSearchQuery): Observable <PublicAPIsSearchResults> {
    const params: HttpParams = new HttpParams({fromObject: query});
    let paramsString: string = params.toString();
    if (paramsString !== '') {
      paramsString = `?${paramsString}`;
    }
    return this.getFromAPI <PublicAPIsSearchResults>(`entries${paramsString}`);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
