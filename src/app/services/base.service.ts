import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class BaseService<M> {
  httpOptions: any;
  constructor(public httpClient: HttpClient) {
    // if (this.credService.credentials) {
    //   this.httpOptions = {
    //     headers: new HttpHeaders({
    //       Authorization: `Bearer ${this.credService.credentials.token}`
    //     })
    //   };
    // } else {
    //   this.httpOptions = {
    //     headers: new HttpHeaders({})
    //   };
    // }
  }
  sendGet(url: any, useCache?: boolean): Observable<M> {
    if (useCache) {
      return this.httpClient.get(url, this.httpOptions).pipe(
        map((body: any) => body),
        catchError(this.handleError)
      );
    } else {
      return this.httpClient.get(url, this.httpOptions).pipe(
        map((body: any) => body),
        catchError(this.handleError)
      );
    }
  }

  sendPost(url: any, payload: any): Observable<M> {
    return this.httpClient.post(url, payload, this.httpOptions).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  sendPut(url: any, payload: any): Observable<M> {
    return this.httpClient.put(url, payload, this.httpOptions).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  sendPatch(url: any, payload: any): Observable<M> {
    return this.httpClient.patch(url, payload, this.httpOptions).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  sendDelete(url: any): Observable<M> {
    return this.httpClient.delete(url).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  baseUrl(url: string) {
    return environment.serverUrl + url;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error('An error occurred:', error.error.message);
    } else {
      // if (error.status === 401 || error.status === 504 || error.status === 400) {
      // console.error('An error occurred:', error.error);

      // {
      //   "status": "UNAUTHORIZED",
      //   "code": "401",
      //   "message": "Invalid username and/or password.Please sign in with correct credentials.",
      //   "description": "uri=/api/auth/v1/signin",
      //   "timestamp": "Fri Oct 11 13:56:08 GMT 2019",
      //   "data": null
      // }
      console.log("handleError", error.error.status);
      return throwError({
        code: error.error.code,
        status: error.error.status,
        message: error.error.message,
        data: error.error.date
      });
      // }
    }
    return throwError(
      JSON.stringify({
        name: error.name,
        status: error.status,
        message: error.message
      })
    );
  }
}
