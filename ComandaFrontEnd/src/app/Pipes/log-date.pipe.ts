import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'logDate'
})
export class LogDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    moment.locale('es');
    return (moment(value).fromNow());
  }

}
