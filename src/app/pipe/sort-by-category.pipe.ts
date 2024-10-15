import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByCategory',
  standalone: true,
})
export class SortByCategoryPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) return items;
    return items.filter((item) =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
