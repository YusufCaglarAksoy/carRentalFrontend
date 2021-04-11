import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { Color } from '../models/color';
import { Customer } from '../models/customer';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform1(value: Brand[], filterText: string): Brand[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((b:Brand)=>b.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

  transform2(value: Color[], filterText: string): Color[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:Color)=>c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

  transform3(value: Car[], filterText: string): Car[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:Car)=>c.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

  transform4(value: Customer[], filterText: string): Customer[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:Customer)=>c.companyName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
