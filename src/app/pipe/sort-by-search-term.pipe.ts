import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBySearchTerm',
  standalone: true,
})
export class SortBySearchTermPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) return items;

    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
