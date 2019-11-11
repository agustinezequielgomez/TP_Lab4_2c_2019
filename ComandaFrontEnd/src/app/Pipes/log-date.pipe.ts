import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'logDate'
})
export class LogDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const DATE = moment(value);
    const NOW = moment();
    const DIFF = NOW.diff(DATE);
    console.log(DIFF, NOW, DATE);
  }

}
