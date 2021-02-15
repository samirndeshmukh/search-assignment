import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalInterceptorService implements HttpInterceptor {

  constructor(public router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
     .pipe(
     
       catchError((error: HttpErrorResponse) => {
         let errorMessage = '';
         if (error.error instanceof ErrorEvent) {
           // client-side error
           errorMessage = `Error: ${error.error.message}`;
         } else {
           // server-side error
           errorMessage = `Error Code: ${error.status}
           Message: ${error.error.error}`;
         }
         this.router.navigate(['/error'],{queryParams:{
           msg:error.error.error,
           msgCode:error.status
         }})
         return throwError(errorMessage);
       })
     )
  }
}
