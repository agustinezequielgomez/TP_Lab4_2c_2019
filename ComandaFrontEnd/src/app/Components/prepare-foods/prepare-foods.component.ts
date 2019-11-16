import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FoodService } from '../../Services/food.service';
import { Food } from 'src/app/Classes/food';
import { FoodPreparationStates } from '../../Classes/food-preparation-states';
import { StorageService } from '../../Services/storage.service';
import { timer } from 'rxjs';
import { ExpandForm, FormOut } from '../../Animations/animation';
import { isNull } from 'util';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';

@Component({
  selector: 'app-prepare-food',
  templateUrl: './prepare-foods.component.html',
  styleUrls: ['./prepare-foods.component.scss'],
  animations: [ExpandForm, FormOut]
})
export class PrepareFoodsComponent implements OnInit {
  public pendingFoodsMap: Map<number, Food[]> = new Map<number, Food[]>();
  public inProgressFoodsMap: Map<number, Food[]> = new Map<number, Food[]>();
  public render = false;

  public estimatedMinutes: number = null;
  public renderEstimatedMinutes = false;
  public sendingData = false;
  constructor(private foodService: FoodService, private storage: StorageService, private snack: DisplaySnackBarService) { }

  ngOnInit() {
    this.foodService.getFoods().subscribe((response) => {
      const EMPLOYEE_ID = this.storage.getSessionStorage('data').id;
      const PENDING_FOODS = response.filter(food => (food.id_empleado === null && food.estado === FoodPreparationStates.Pendiente));
      const INPROGRESS_FOODS = response.filter(food =>
                                              (food.id_empleado === EMPLOYEE_ID && food.estado === FoodPreparationStates.En_preparacion));
      this.mapFoods(PENDING_FOODS, this.pendingFoodsMap);
      this.mapFoods(INPROGRESS_FOODS, this.inProgressFoodsMap);
      this.render = true;
    });
  }

  mapFoods(foodsArray: Food[], foodsMap: Map<number, Food[]>) {
    for (const food of foodsArray) {
      if (foodsMap.has(food.id_pedido)) {
        foodsMap.get(food.id_pedido).push(food);
      } else {
        foodsMap.set(food.id_pedido, [food]);
      }
    }
  }

  isNotNull() {
    return !isNull(this.estimatedMinutes);
  }

  prepareFood(orderNumber: number) {
    this.sendingData = true;
    if (this.renderEstimatedMinutes) {
      this.foodService.prepareFood(orderNumber, this.estimatedMinutes).subscribe((response) => {
        this.sendingData = false;
        this.pendingFoodsMap.delete(orderNumber);
        timer(1500).subscribe(() => this.inProgressFoodsMap.set(orderNumber, this.pendingFoodsMap.get(orderNumber)));
        this.snack.openSnackBar(`Pedido ${orderNumber} en preparacion`, 'success', 3);
        this.estimatedMinutes = null;
      });
    } else {
      this.renderEstimatedMinutes = true;
    }
  }

  finalizePreparation(orderNumber: number) {
    this.sendingData = true;
    this.foodService.finalizePreparation().subscribe((response) => {
      this.sendingData = false;
      this.snack.openSnackBar(`Pedido ${orderNumber} preparado`, 'success', 3);
      this.inProgressFoodsMap.delete(orderNumber);
    });
  }
}
