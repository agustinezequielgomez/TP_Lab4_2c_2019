import { Component, OnInit } from '@angular/core';
import { MesaService } from '../../Services/mesa.service';
import { Mesa } from 'src/app/Classes/mesa';
import { Menu } from 'src/app/Classes/menu';
import { isUndefined } from 'util';
import { OrdersService } from '../../Services/orders.service';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';
import { DataShareService } from '../../Services/data-share.service';
import { FileUploadService } from '../../Services/file-upload.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
  styleUrls: ['./generate-order.component.scss']
})
export class GenerateOrderComponent implements OnInit {

  public mesas: Mesa[];
  public menu: Menu[];
  public tablePhoto: File;
  public selectedTable: Mesa;
  public MenuJson: string;
  public disableButton = true;
  public sendingData = false;
  constructor(private mesaService: MesaService, private order: OrdersService, private snack: DisplaySnackBarService,
              private share: DataShareService, private fileUpload: FileUploadService) { }

  ngOnInit() {
    this.mesaService.getMesas().subscribe((response) => {
      this.mesas = response.filter((mesa) => {
        return (mesa.id_pedido === 0);
      });
    });
    this.share.MenuJsonObservable.subscribe((json) => {
      this.MenuJson = json;
    });
  }

  updatePedido(menu: Menu[]) {
    this.menu = menu;
    for (const ALIMENTO of menu) {
      if (ALIMENTO.cantidad > 0) {
        this.disableButton = false;
        return;
      }
    }
    this.disableButton = true;
  }

  saveTablePhoto(photo: File) {
    this.tablePhoto = photo;
  }

  validateInformation() {
    return (isUndefined(this.tablePhoto) || isUndefined(this.selectedTable));
  }

  orderFood() {
    this.sendingData = true;
    this.disableButton = true;
    const REQUEST = new FormData();
    let comida = '';
    let vino = '';
    let trago = '';
    let cerveza = '';
    let postre = '';
    this.menu.forEach((alimentos) => {
      if (alimentos.cantidad > 0) {
        for (let i = 0; i < alimentos.cantidad; i++) {
          switch (alimentos.tipo.toLowerCase()) {
            case 'comida':
              comida === '' ? comida = alimentos.nombre : comida = comida.concat(`, ${alimentos.nombre}`);
              break;

            case 'cerveza':
              cerveza === '' ? cerveza = alimentos.nombre : cerveza = cerveza.concat(`, ${alimentos.nombre}`);
              break;

            case 'postre':
              postre === '' ? postre = alimentos.nombre : postre = postre.concat(`, ${alimentos.nombre}`);
              break;

            case 'trago':
              trago === '' ? trago = alimentos.nombre : trago = trago.concat(`, ${alimentos.nombre}`);
              break;

            case 'vino':
              vino === '' ? vino = alimentos.nombre : vino = vino.concat(`, ${alimentos.nombre}`);
              break;
          }
        }
      }
    });
    REQUEST.append('n_mesa', this.selectedTable.id.toString());
    REQUEST.append('comida', comida);
    REQUEST.append('vino', vino);
    REQUEST.append('trago', trago);
    REQUEST.append('cerveza', cerveza);
    REQUEST.append('foto', this.tablePhoto);
    REQUEST.append('postre', postre);
    this.order.makeOrder(REQUEST).subscribe((response) => {
      this.fileUpload.uploadFile(this.tablePhoto, `${environment.ORDERS_DIRECTORY}${response.foto}`).subscribe((percentage) => {
        if (percentage === 100) {
          this.sendingData = false;
          this.disableButton = false;
          this.snack.openSnackBar(`¡Pedido realizado con exito! Entreguele este codigo de pedido al cliente: ${response.codigo}`, 'success', 3);
          this.mesaService.getMesas().subscribe((tables) => {
            this.mesas = tables.filter((mesa) => {
              return (mesa.id_pedido === 0);
            });
          });
        }
      });
    }, (err) => {
      this.disableButton = false;
      this.snack.openSnackBar('Hubo un error agregando el pedido. Intentelo nuevamente', 'error', 1);
    });
  }
}
