import { Pipe, PipeTransform } from '@angular/core';
import { company } from '../company/company.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: company[], searchItem: string): any {

    if (!data) return null;
    if (!searchItem) return data;

    searchItem = searchItem.toLowerCase();

    return data.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(searchItem);
    });
  }

}
