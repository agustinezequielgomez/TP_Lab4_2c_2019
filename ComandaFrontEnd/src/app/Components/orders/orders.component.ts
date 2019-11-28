import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';
import { Food } from 'src/app/Classes/food';
import { Pedido } from '../../Classes/pedido';
import { OrdersService } from '../../Services/orders.service';
import { isNull } from 'util';
import { FoodPreparationStates } from 'src/app/Classes/food-preparation-states';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';
import { StorageService } from '../../Services/storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public render = false;
  public ordersMap: Map<Pedido, Food[]>;
  public orders: Pedido[];
  public foods: Food[];
  public isWaitress: boolean;
  constructor(private foodService: FoodService, private ordersService: OrdersService, private snack: DisplaySnackBarService,
              private storage: StorageService) { }

  ngOnInit() {
    this.isWaitress = (this.storage.getSessionStorage('data').role === 'mozo');
    this.initialize();
  }

  initialize() {
    this.orders = null;
    this.foods = null;
    this.ordersMap = new Map<Pedido, Food[]>();
    this.ordersService.getOrders().subscribe((response) => {
      this.orders = response;
      if (!isNull(this.orders) && !isNull(this.foods)) {
        this.mapData();
        this.render = true;
      }
    });

    this.foodService.getFoods().subscribe((response) => {
      console.log(response);
      this.foods = response;
      if (!isNull(this.orders) && !isNull(this.foods)) {
        this.mapData();
        this.render = true;
      }
    });
  }

  mapData() {
    for (const food of this.foods) {
      if (this.hasOrderSet(food.id_pedido)) {
        this.ordersMap.get(this.orders.find(order => order.id === food.id_pedido)).push(food);
      } else {
        this.ordersMap.set(this.orders.find(order => order.id === food.id_pedido), [food]);
      }
    }
  }

  hasOrderSet(key: number): boolean {
    for (const order of this.ordersMap.keys()) {
      if (order.id === key) {
        return true;
      }
    }
    return false;
  }

  enableButton(order: Pedido): boolean {
    return (order.estado !== FoodPreparationStates.Listo_para_servir);
  }

  enableCancelationButton(order: Pedido): boolean {
    return (order.estado === FoodPreparationStates.Cancelado || order.estado === FoodPreparationStates.Entregado);
  }

  deliverOrder(orderId: number) {
    this.render = false;
    this.ordersService.deliverOrder(orderId).subscribe((response) => {
      this.initialize();
      this.snack.openSnackBar(response, 'success', 3);
    }, (err) => {
      this.render = true;
      this.snack.openSnackBar(err.error, 'warning', 2);
    });
  }

  cancelOrder(orderId: number) {
    this.render = false;
    this.ordersService.cancelOrder(orderId).subscribe((response) => {
      this.initialize();
      this.snack.openSnackBar(response, 'success', 3);
    }, (err) => {
      this.snack.openSnackBar(err.error, 'warning', 1);
    });
  }
}
