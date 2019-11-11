import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { EMPTY, Observable, throwError, timer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DisplaySnackBarService } from './display-snack-bar.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  private jwtHelper = new JwtHelperService();
  constructor(private storage: StorageService, private router: Router, private snack: DisplaySnackBarService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let HEADERS = new HttpHeaders();
    HEADERS = HEADERS.set('Access-Control-Allow-Origin', '*');
    HEADERS = HEADERS.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    HEADERS = HEADERS.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    let REQUEST = req.clone({
      headers: HEADERS
    });
    if (req.url.includes('/Login') || req.url.includes('/Register')  || req.urlWithParams.includes('/Empleados/?login=true')) {
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

    const TOKEN = this.storage.getSessionStorage('data').token;
    if (this.jwtHelper.isTokenExpired(TOKEN)) {
      this.snack.openSnackBar('Autenticacion expirada. Volviendo al login', 'warning', 2);
      timer(3000).subscribe(() => this.router.navigate(['Access']));
      return EMPTY;
    } else if (this.authAPIAccess(REQUEST)) {
      HEADERS = HEADERS.append('token', `${this.storage.getSessionStorage('data').token}`);
      REQUEST = req.clone({
        headers: HEADERS
      });
      return next.handle(REQUEST).pipe(
        retry(1),
        catchError((err) => {
          const ERROR_RESPONSE = new HttpErrorResponse({
            error: err.error,
            status: err.status
          });
          if (ERROR_RESPONSE.status === 403) {
            this.snack.openSnackBar('No posees los permisos para realizar esta accion. Volviendo al login', 'warning', 2);
            timer(3000).subscribe(() => this.router.navigate(['Access']));
          }
          return throwError(ERROR_RESPONSE);
        })
      );
    } else {
      this.snack.openSnackBar('No posees los permisos para realizar esta accion. Volviendo al login', 'warning', 2);
      timer(3000).subscribe(() => this.router.navigate(['Access']));
      return EMPTY;
    }
  }

  authAPIAccess(request: HttpRequest<any>): boolean {
    const ROLE = this.storage.getSessionStorage('data').role;
    switch (ROLE) {
      case 'administrador':
        if (request.url.includes('/Empleados') || request.url.includes('/Registros') ||
        request.url.includes('/Menu') || request.url.includes('/Mesa') || request.url.includes('/Consultas')) {
          return true;
        } else {
          return false;
        }
        break;

      case 'cocinero':
      case 'bartender':
      case 'cervecero':
        if (request.url.includes('/Alimentos')) {
          return true;
        } else {
          return false;
        }
        break;

      case 'mozo':
        if (request.url.includes('/Pedidos') && !request.url.includes('/Pedidos/TiempoEstimado') ||
        request.url.includes('/Mesa') && request.method === 'GET' || request.url.includes('Menu/') && request.method === 'GET') {
          return true;
        } else {
          return false;
        }
        break;

      case 'socio':
          if (request.url.includes('/Alimentos') || request.url.includes('/Menu') ||
          request.url.includes('/Pedidos') && request.method === 'GET' || request.url.includes('/Mesa') ||
          request.url.includes('/Consultas/ImportesTotales')) {
            return true;
          } else {
            return false;
          }
          break;

      case 'cliente':
        if (request.url.includes('/Pedidos/TiempoEstimado') || request.url.includes('/Menu') && request.method === 'GET') {
          return true;
        } else {
          return false;
        }
        break;
    }
  }
}
