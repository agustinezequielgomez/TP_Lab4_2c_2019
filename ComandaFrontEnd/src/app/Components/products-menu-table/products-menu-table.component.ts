import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { MenuService } from 'src/app/Services/menu.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Menu } from 'src/app/Classes/menu';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-products-menu-table',
  templateUrl: './products-menu-table.component.html',
  styleUrls: ['./products-menu-table.component.scss']
})
export class ProductsMenuTableComponent implements OnInit {

  @Input() order: boolean;
  @Output() updatedMenu = new EventEmitter<Menu[]>();
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  public menu: Menu[];
  public displayedColumns: string[] = ['foto', 'id', 'nombre', 'tipo', 'precio'];
  public dataSource: MatTableDataSource<Menu>;
  constructor(private menuService: MenuService, private domSanitzaion: DomSanitizer) { }

  ngOnInit() {
    if (this.order) {
      this.displayedColumns.push('cantidad');
    }
    this.menuService.getMenu().subscribe((response) => {
      this.menu = response;
      this.dataSource = new MatTableDataSource(this.menu);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  updateQuantity(quantity: number, menuItem: Menu) {
    menuItem.cantidad = quantity;
    this.updatedMenu.emit(this.menu);
  }

  filterTable(filterString: string) {
    this.dataSource.filter = filterString.trim().toLowerCase();
  }

  initQuantity() {
    this.menu.forEach(alimento => {
      alimento.cantidad = 0;
    });
  }
}
