import { Component, OnInit } from '@angular/core';
import { Menu } from '../../Classes/menu';
import { MenuService } from 'src/app/Services/menu.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTable } from '@angular/material';
import { StorageService } from '../../Services/storage.service';

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.scss']
})
export class ProductsMenuComponent implements OnInit {

  public generatePdf = false;
  public menu: Menu[];
  constructor(private menuService: MenuService, private domSanitzaion: DomSanitizer, private storage: StorageService) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe((response) => {
      this.menu = response;
    });
    if (this.storage.getSessionStorage('data').role === 'administrador') {
      this.generatePdf = true;
    }
  }

}
