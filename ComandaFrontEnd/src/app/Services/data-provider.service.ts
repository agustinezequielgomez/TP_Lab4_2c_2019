import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private adminCards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[] = [
    {title: 'Usuarios', subtitle: 'Administracion de usuarios', imgPath: '../../assets/users.jpg', callback: () => this.redirect('Access')},
    {title: 'Registros', subtitle: 'Administrar registros de usuarios', imgPath: '../../assets/registers.jpg', callback: () => this.redirect('Access')},
    {title: 'Menu', subtitle: 'Administrar carta', imgPath: '../../assets/food.jpg', callback: () => this.redirect('Access')},
    {title: 'Mesas', subtitle: 'Administrar mesas', imgPath: '../../assets/table.jpg', callback: () => this.redirect('Access')},
    {title: 'Estadisticas', subtitle: 'Consultar estadisticas del sistema', imgPath: '../../assets/stats.jpg',
    callback: () => this.redirect('Access')}];
  constructor(private router: Router) { }

  public get getAdminCards() {
    return this.adminCards;
  }

  redirect(screen: string) {
    this.router.navigate([`${screen}`]);
  }
}
