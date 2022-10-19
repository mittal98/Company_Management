import { Pipe, PipeTransform } from '@angular/core';
import { company } from '../company/company.model';

@Pipe({
  // pipename
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: company[], searchItem: string): any {

    if (!searchItem) {
      return data
    }
    return data.filter((item: any) => {
      return item.companyName.toLowerCase().indexOf((searchItem.toLowerCase()))>-1
    });
  }
}
