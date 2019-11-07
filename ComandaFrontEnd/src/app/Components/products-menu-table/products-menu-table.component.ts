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
import { ExpandRow, ExpandDiv } from '../../Animations/animation';
import { UpdateMenuRequest } from '../../Classes/update-menu-request';
import { SnackBarTemplateComponent } from '../snack-bar-template/snack-bar-template.component';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';

@Component({
  selector: 'app-products-menu-table',
  templateUrl: './products-menu-table.component.html',
  styleUrls: ['./products-menu-table.component.scss'],
  animations: [ExpandRow, ExpandDiv]
})
export class ProductsMenuTableComponent implements OnInit {

  @Output() updatedMenu = new EventEmitter<Menu[]>();
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  public menu: Menu[];
  public selectedMenuItem: Menu | null;
  public displayedColumns: string[] = ['foto', 'id', 'nombre', 'tipo', 'precio'];
  public dataSource: MatTableDataSource<Menu>;
  public adminTemplate = false;
  public newMenuItem = new Menu();
  public showAddMenu = false;
  public menuPhoto: File;
  constructor(private menuService: MenuService, public domSanitzaion: DomSanitizer, private storage: StorageService,
              private upload: FileUploadService, private snackbar: DisplaySnackBarService) { }

  ngOnInit() {
    if (this.storage.getSessionStorage('data').role === 'mozo') {
      this.displayedColumns.push('cantidad');
    } else if (this.storage.getSessionStorage('data').role === 'administrador') {
      this.adminTemplate = true;
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

  updateMenuItem() {
    const REQUEST: UpdateMenuRequest = {
      id: this.selectedMenuItem.id,
      tipo: this.selectedMenuItem.tipo,
      precio: this.selectedMenuItem.precio,
      nombre: this.selectedMenuItem.nombre
    };

    this.menuService.updateMenuItem(REQUEST).subscribe((response) => {
      this.snackbar.openSnackBar(response, 'success', 3);
    });
  }

  selectFile($event) {
    this.menuPhoto = $event;
  }

  addMenuItem() {
    const REQUEST = new FormData();
    REQUEST.append('nombre', this.newMenuItem.nombre);
    REQUEST.append('tipo', this.newMenuItem.tipo);
    REQUEST.append('precio', this.newMenuItem.precio.toString());
    REQUEST.append('foto', this.menuPhoto);

    this.menuService.newMenuItem(REQUEST).subscribe((response) => {
      this.upload.uploadFile(this.menuPhoto, `${environment.MENU_DIRECTORY}${response}`).subscribe((percentage) => {
        if (percentage === 100) {
          this.menu.push(this.newMenuItem);
          this.snackbar.openSnackBar('Comida agregada al menu con exito', 'success', 3);
        }
      });
    });
  }
}
