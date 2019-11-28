import { Injectable } from '@angular/core';
import { StarRatingConfigService } from 'angular-star-rating';

@Injectable({
  providedIn: 'root'
})
export class StarRatingService extends StarRatingConfigService {

  constructor() {
    super();
    this.numOfStars = 10;
    this.size = 'large';
    this.starType = 'icon';
    this.staticColor = 'default';
  }
}
