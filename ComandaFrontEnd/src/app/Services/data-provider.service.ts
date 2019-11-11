import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private adminCards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[] = [
    {title: 'Usuarios', subtitle: 'Administracion de usuarios', imgPath: '../../assets/users.jpg', callback: () => this.redirect('Access')},
    {title: 'Registros', subtitle: 'Administrar registros de usuarios', imgPath: '../../assets/registers.jpg', callback: () => this.redirect('Logs')},
    {title: 'Menu', subtitle: 'Administrar carta', imgPath: '../../assets/food.jpg', callback: () => this.redirect('Menu')},
    {title: 'Mesas', subtitle: 'Administrar mesas', imgPath: '../../assets/table.jpg', callback: () => this.redirect('Access')},
    {title: 'Estadisticas', subtitle: 'Consultar estadisticas del sistema', imgPath: '../../assets/stats.jpg',
    callback: () => this.redirect('Access')}];

  private beerManCard: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[] = [
    {title: 'Cervezas', subtitle: 'Preparar cervezas y ver cervezas restantes', imgPath: '../../assets/52.jpg', callback: () => this.redirect('Access')}];
  constructor(private router: Router) { }

  private clientCard: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[] = [
    {title: 'Pedido', subtitle: 'Consulta cuanto tiempo falta para que tu pedido este listo', imgPath: '../../assets/timer.jpg',
    callback: () => this.redirect('Access')},
    {title: 'Menu', subtitle: 'Consultar carta', imgPath: '../../assets/food.jpg', callback: () => this.redirect('Menu')},
  ];

  private cocineroCard: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[] = [
    {title: 'Comidas', subtitle: 'Preparar nuevas comidas y ver comidas a preparar', imgPath: '../../assets/food.jpg',
     callback: () => this.redirect('Access')}
  ];

  private mozoCards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[] = [
    {title: 'Pedidos', subtitle: 'Administrar pedidos', imgPath: '../../assets/pedidos.jpg', callback: () => this.redirect('generateOrder')}
  ];

  private socioCards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[] = [
    {title: 'Pedidos', subtitle: 'Ver todos los pedidos en preparacion', imgPath: '../../assets/pedidos.jpg',
    callback: () => this.redirect('Access')},
    {title: 'Menu', subtitle: 'Administrar carta', imgPath: '../../assets/food.jpg', callback: () => this.redirect('Menu')},
    {title: 'Mesas', subtitle: 'Cobrar y cerrar mesas', imgPath: '../../assets/table.jpg', callback: () => this.redirect('Access')}
  ];
  public get getAdminCards() {
    return this.adminCards;
  }

  public get getBeerManCard() {
    return this.beerManCard;
  }

  public get getClientCards() {
    return this.clientCard;
  }

  public get getChefCards() {
    return this.cocineroCard;
  }

  public get getMozoCards() {
    return this.mozoCards;
  }

  public get getSocioCards() {
    return this.socioCards;
  }
  
  redirect(screen: string) {
    console.log(screen);
    this.router.navigate([`${screen}`]);
  }
}
