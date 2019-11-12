import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../Services/food.service';
import { Food } from 'src/app/Classes/food';
import { FoodPreparationStates } from '../../Classes/food-preparation-states';
import { StorageService } from '../../Services/storage.service';

@Component({
  selector: 'app-prepare-food',
  templateUrl: './prepare-foods.component.html',
  styleUrls: ['./prepare-foods.component.scss']
})
export class PrepareFoodsComponent implements OnInit {

  public pendingFoods: Food[];
  public inProgressFoods: Food[];
  constructor(private foodService: FoodService, private storage: StorageService) { }

  ngOnInit() {
    this.foodService.getFoods().subscribe((response) => {
      const EMPLOYEE_ID = this.storage.getSessionStorage('data').id;
      this.pendingFoods = response.filter(food => (food.id_empleado === 0 && food.estado === FoodPreparationStates.Pendiente));
      this.inProgressFoods = response.filter(food => (food.id_empleado === EMPLOYEE_ID && food.estado === FoodPreparationStates.En_preparacion));
    });
  }

}