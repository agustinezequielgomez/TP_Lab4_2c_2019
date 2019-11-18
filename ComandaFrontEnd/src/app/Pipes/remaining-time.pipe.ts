import { Pipe, PipeTransform } from '@angular/core';
import { interval } from 'rxjs';

@Pipe({
  name: 'remainingTime'
})
export class RemainingTimePipe implements PipeTransform {

  transform(value: any, seconds: number): any {
    interval(1000).subscribe(() => {
      seconds -= 1;
      if (seconds === 0) {
        value -= 1;
        seconds = 60;
      }
      return `${value}:${seconds}`;
    });
  }

}
