import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { MenuService } from 'src/app/Services/menu.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Menu } from 'src/app/Classes/menu';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { DataShareService } from '../../Services/data-share.service';
import { FileUploadService } from '../../Services/file-upload.service';
import { environment } from 'src/environments/environment';
import { StorageService } from '../../Services/storage.service';

@Component({
  selector: 'app-products-menu-table',
  templateUrl: './products-menu-table.component.html',
  styleUrls: ['./products-menu-table.component.scss']
})
export class ProductsMenuTableComponent implements OnInit {

  @Output() updatedMenu = new EventEmitter<Menu[]>();
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  public menu: Menu[];
  public displayedColumns: string[] = ['foto', 'id', 'nombre', 'tipo', 'precio'];
  public dataSource: MatTableDataSource<Menu>;
  constructor(private menuService: MenuService, public domSanitzaion: DomSanitizer, private storage: StorageService,
              private upload: FileUploadService) { }

  ngOnInit() {
    if (this.storage.getSessionStorage('data').role === 'mozo') {
      this.displayedColumns.push('cantidad');
    }
    this.menuService.getMenu().subscribe((response) => {
      this.menu = response;
      for (const food of this.menu) {
        this.upload.downloadFile(`${environment.MENU_DIRECTORY}${food.path}`).subscribe((photoResponse) => {
          food.path = photoResponse;
        });
      }
      this.updatedMenu.emit(this.menu);
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
