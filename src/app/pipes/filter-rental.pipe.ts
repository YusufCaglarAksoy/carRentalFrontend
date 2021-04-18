import { Pipe, PipeTransform } from '@angular/core';
import { Rental } from '../models/rental';

@Pipe({
  name: 'filterRental'
})
export class FilterRentalPipe implements PipeTransform {

  transform(value: Rental[], filterText: string): Rental[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((r:Rental)=>r.userFirstName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
