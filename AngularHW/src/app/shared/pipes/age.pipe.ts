import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

    transform(value: Date): number {
        const today = moment();
        const birthdate = moment(value);
        const years = today.diff(birthdate, 'years');
        return years;
    }
}
