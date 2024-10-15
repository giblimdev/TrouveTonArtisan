// header.component.ts
import { NgModule, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  artisans: any[] = [];
  searchTerm: string = '';
  suggestions: string[] = [];
  constructor(private searchService: SearchService) {}

  onSearch() {
    this.searchService.updateSearchTerm(this.searchTerm);
  }
}
