import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../Services/food.service';

@Component({
  selector: 'app-perpare-food',
  templateUrl: './perpare-food.component.html',
  styleUrls: ['./perpare-food.component.scss']
})
export class PerpareFoodComponent implements OnInit {

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getFoods().subscribe((response) => {
      console.log(response);
    });
  }

}
