import { Pipe, PipeTransform } from '@angular/core';
import { company } from '../company/company.model';

@Pipe({
  // pipename
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: company[], searchItem: string): any {

    if (!data) return [];
    if (!searchItem) return data;

    searchItem = searchItem.toLowerCase();

    return data.filter((item: any) => {
      return item.companyName.toLowerCase().includes(searchItem);
    });
  }

}
