import { Injectable } from '@angular/core';
import { DataShareService } from './data-share.service';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectionServiceService {

  constructor(private storage: StorageService, private router: Router) { }

  redirectionService() {
    const DATA = this.storage.getSessionStorage('data');
    console.log(DATA.role);
    switch (DATA.role) {
      case 'administrador':
        this.router.navigate(['AdministratorScreen']);
        break;

      case 'cervecero':
        this.router.navigate(['CerveceroScreen']);
        break;

      case 'cocinero':
        this.router.navigate(['CocineroScreen']);
        break;

      case 'mozo':
        this.router.navigate(['MozoScreen']);
        break;

      case 'socio':
        this.router.navigate(['SocioScreen']);
        break;

      default:
        this.router.navigate(['Access']);
        break;
    }
  }
}
