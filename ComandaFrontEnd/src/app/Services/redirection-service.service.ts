import { Injectable } from '@angular/core';
import { DataShareService } from './data-share.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectionServiceService {

  constructor(private share: DataShareService, private router: Router) { }

  redirectionService() {
    const ROLE = sessionStorage.getItem('role');
    console.log(ROLE);
    switch (ROLE) {
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
