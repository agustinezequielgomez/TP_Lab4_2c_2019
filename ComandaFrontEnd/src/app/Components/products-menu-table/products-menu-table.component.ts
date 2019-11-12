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
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { isUndefined, isNullOrUndefined } from 'util';
import { timer } from 'rxjs';

@Component({
  selector: 'app-products-menu-table',
  templateUrl: './products-menu-table.component.html',
  styleUrls: ['./products-menu-table.component.scss'],
  animations: [ExpandRow, ExpandDiv]
})
export class ProductsMenuTableComponent implements OnInit {

  @Output() updatedMenu = new EventEmitter<Menu[]>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  public menu: Menu[];
  public displayedColumns: string[] = ['foto', 'id', 'nombre', 'tipo', 'precio'];
  public dataSource: MatTableDataSource<Menu>;

  public selectedMenuItem: Menu | null;
  public menuPhoto: File;
  public newMenuItem = new Menu();
  public addMenuItemForm: FormGroup;

  public adminTemplate = false;
  public showAddMenu = false;
  public enableButton = true;
  public showSkeleton = true;
  constructor(private menuService: MenuService, public domSanitzaion: DomSanitizer, private storage: StorageService,
              private upload: FileUploadService, private snackbar: DisplaySnackBarService) { }

  ngOnInit() {
    if (this.storage.getSessionStorage('data').role === 'mozo') {
      this.displayedColumns.push('cantidad');
    } else if (this.storage.getSessionStorage('data').role === 'administrador') {
      this.addMenuItemForm = new FormGroup({
        nombre: new FormControl('', Validators.required),
        precio: new FormControl('', [Validators.required, this.NumericValue]),
        tipo: new FormControl('', Validators.required)
      });
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
      timer(1500).subscribe(() => {
        this.showSkeleton = false;
      });
    });
  }

  NumericValue(control: AbstractControl) {
    if (!isNaN(control.value)) {
      return null;
    }

    return { NumericValue: true };
  }

  ValidatePhoto() {
    return isUndefined(this.menuPhoto);
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
    this.enableButton = false;
    const REQUEST: UpdateMenuRequest = {
      id: this.selectedMenuItem.id,
      tipo: this.selectedMenuItem.tipo,
      precio: this.selectedMenuItem.precio,
      nombre: this.selectedMenuItem.nombre
    };

    this.menuService.updateMenuItem(REQUEST).subscribe((response) => {
      this.enableButton = true;
      this.snackbar.openSnackBar(response, 'success', 3);
    }, (err) => {
      this.enableButton = true;
    });
  }

  selectFile($event) {
    this.menuPhoto = $event;
  }

  addMenuItem() {
    this.enableButton = false;
    const REQUEST = new FormData();
    REQUEST.append('nombre', this.addMenuItemForm.controls['nombre'].value);
    REQUEST.append('tipo', this.addMenuItemForm.controls['tipo'].value);
    REQUEST.append('precio', this.addMenuItemForm.controls['precio'].value);
    REQUEST.append('foto', this.menuPhoto);

    this.menuService.newMenuItem(REQUEST).subscribe((response) => {
      this.upload.uploadFile(this.menuPhoto, `${environment.MENU_DIRECTORY}${response}`).subscribe((percentage) => {
        if (percentage === 100) {
          this.addMenuItemForm.reset();
          this.enableButton = true;
          this.menu.push(this.newMenuItem);
          this.snackbar.openSnackBar('Comida agregada al menu con exito', 'success', 3);
        }
      }, (err) => {
        this.enableButton = true;
      });
    });
  }
}
