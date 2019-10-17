import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataShareService } from './data-share.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  private jwtHelper = new JwtHelperService();
  constructor(private share: DataShareService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const REQUEST = req.clone();
    REQUEST.headers.set('Access-Control-Allow-Origin', '*');
    REQUEST.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    REQUEST.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    if (REQUEST.url.includes('/Login') || REQUEST.url.includes('/Register')) {
      return next.handle(REQUEST).pipe(
        retry(1),
        catchError((err) => {
          const ERROR_RESPONSE = new HttpErrorResponse({
            error: err.error,
            status: err.status
          });
          return throwError(ERROR_RESPONSE);
        })
      );
    }

    const TOKEN = this.share.getToken();
    if (this.jwtHelper.isTokenExpired(TOKEN)) {
      this.router.navigate(['/Login']);
    } else {
      REQUEST.headers.set('token', TOKEN);
      next.handle(REQUEST).pipe(
        retry(1),
        catchError((err) => {
          const ERROR_RESPONSE = new HttpErrorResponse({
            error: err.error,
            status: err.status
          });
          return throwError(ERROR_RESPONSE);
        })
      );
    }
  }
}
