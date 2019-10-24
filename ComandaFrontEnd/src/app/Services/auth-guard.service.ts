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
    if (state.url !== '/Access' && this.jwt.isTokenExpired(this.storage.getSessionStorage('data').token)) {
      this.snack.openSnackBar('', 'warning', 2);
      timer(3000).subscribe(() => {
        this.router.navigate(['/Access']);
      });
    }

    const ROLE = this.storage.getSessionStorage('data').role;
    switch (state.url) {
      case '/Access':
        return true;

      case '/AdministratorScreen':
        if (ROLE === 'administrador') {
          return true;
        } else {
          this.redirect.redirectionService();
        }
        break;

      case '/CerveceroScreen':
          if (ROLE === 'cervecero') {
            return true;
          } else {
            this.redirect.redirectionService();
          }
          break;

      case '/CocineroScreen':
          if (ROLE === 'cocinero') {
            return true;
          } else {
            this.redirect.redirectionService();
          }
          break;

      case '/MozoScreen':
          if (ROLE === 'mozo') {
            return true;
          } else {
            this.redirect.redirectionService();
          }
          break;

      case '/SocioScreen':
          if (ROLE === 'socio') {
            return true;
          } else {
            this.redirect.redirectionService();
          }
          break;
    }
  }


}
