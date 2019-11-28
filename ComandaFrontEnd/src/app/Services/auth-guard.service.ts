import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, UrlSegmentGroup } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { DataShareService } from './data-share.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DisplaySnackBarService } from './display-snack-bar.service';
import { RedirectionServiceService } from './redirection-service.service';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private jwt: JwtHelperService = new JwtHelperService();
  constructor(private router: Router, public share: DataShareService, private snack: DisplaySnackBarService,
              private redirect: RedirectionServiceService, private storage: StorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.share.setLastUrl(state.url);
    if (state.url !== '/Access' && this.storage.getSessionStorage('data') !== null
        && this.jwt.isTokenExpired(this.storage.getSessionStorage('data').token)) {
      this.snack.openSnackBar('Autenticacion expirada. Volviendo al login.', 'warning', 2);
      timer(3000).subscribe(() => {
        this.router.navigate(['/Access']);
      });
    }

    const ROLE = this.storage.getSessionStorage('data').role;
    switch (state.url) {
      case '/Home':
      case '/Access':
        return true;

      case '/generateOrder':
        return (ROLE === 'mozo') ?  true : this.router.navigate(['Home']);

      case '/Menu':
        return (ROLE === 'administrador' || ROLE === 'cliente' || ROLE === 'socio') ? true : this.router.navigate(['Home']);

      case '/Logs':
        return (ROLE === 'administrador') ? true : this.router.navigate(['Home']);

      case '/Orders':
        return (ROLE === 'socio' || ROLE === 'mozo') ? true : this.router.navigate(['Home']);

      case '/Tables':
        return (ROLE === 'socio') ? true : this.router.navigate(['Home']);

      case '/Prepare':
        return (ROLE === 'cocinero' || ROLE === 'cervecero') ? true : this.router.navigate(['Home']);
    }
  }
}
