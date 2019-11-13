import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FoodService } from '../../Services/food.service';
import { Food } from 'src/app/Classes/food';
import { FoodPreparationStates } from '../../Classes/food-preparation-states';
import { StorageService } from '../../Services/storage.service';
import { timer } from 'rxjs';
import { ExpandForm } from '../../Animations/animation';
import { isNull } from 'util';

@Component({
  selector: 'app-prepare-food',
  templateUrl: './prepare-foods.component.html',
  styleUrls: ['./prepare-foods.component.scss'],
  animations: [ExpandForm]
})
export class PrepareFoodsComponent implements OnInit {
  public pendingFoodsMap: Map<number, Food[]> = new Map<number, Food[]>();
  public inProgressFoodsMap: Map<number, Food[]> = new Map<number, Food[]>();
  public render = false;

  public estimatedMinutes: number = null;
  public renderEstimatedMinutes = false;
  constructor(private foodService: FoodService, private storage: StorageService) { }

  ngOnInit() {
    this.foodService.getFoods().subscribe((response) => {
      console.log(response);
      const EMPLOYEE_ID = this.storage.getSessionStorage('data').id;
      const PENDING_FOODS = response.filter(food => (food.id_empleado === 0 && food.estado === FoodPreparationStates.Pendiente));
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
    if (this.renderEstimatedMinutes) {
      this.foodService.prepareFood(orderNumber, this.estimatedMinutes).subscribe((response) => {
        this.inProgressFoodsMap.set(orderNumber, this.pendingFoodsMap.get(orderNumber));
        this.pendingFoodsMap.delete(orderNumber);
        console.log(response);
      });
    } else {
      this.renderEstimatedMinutes = true;
    }
  }
}
