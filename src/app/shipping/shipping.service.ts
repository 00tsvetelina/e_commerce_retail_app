import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Shipping } from "./shipping";
import { Observable, tap } from "rxjs";
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';




@Injectable({
    providedIn: 'root'
})

export class ShippingService {
    private shippingUrl = 'api/shipping';

    constructor(private http: HttpClient) { }

    getShippingPrices(): Observable<Shipping[]> {
        // return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
        return this.http.get<Shipping[]>(this.shippingUrl)
          .pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)

          );      
      }

      private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Backend returned code ${err.status}: ${err.message}`;
        }
        console.error(err);
        return throwError(() => errorMessage);
      }
}