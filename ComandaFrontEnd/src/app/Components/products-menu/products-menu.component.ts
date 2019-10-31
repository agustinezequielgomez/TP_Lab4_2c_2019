import { Component, OnInit } from '@angular/core';
import { Menu } from '../../Classes/menu';
import { MenuService } from 'src/app/Services/menu.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.scss']
})
export class ProductsMenuComponent implements OnInit {

  public menu: Menu[];
  public displayedColumns: string[] = ['foto', 'id', 'nombre', 'tipo', 'precio'];
  constructor(private menuService: MenuService, private domSanitzaion: DomSanitizer) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe((response) => {
      this.menu = response;
      this.menu[0].path = 'https://agustinezequielgomez.000webhostapp.com/Mesa_3_Pedido_CBZc6.PNG';
    });
  }

}
