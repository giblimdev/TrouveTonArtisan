import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByTop',
  standalone: true,
})
export class SortByTopPipe implements PipeTransform {
  transform(items: any[]): any[] {
    if (!items) return [];
    return items.filter((item) => item.top === true);
  }
}
