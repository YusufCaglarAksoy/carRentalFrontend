import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRental'
})
export class FilterRentalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
