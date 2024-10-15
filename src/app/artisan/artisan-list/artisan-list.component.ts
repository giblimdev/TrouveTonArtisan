// artisan-list.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { ArtisanService } from '../../getartisans.service';
import { RouterLink } from '@angular/router';
import { NoteDirective } from '../../note.directive';
import { SortBySearchTermPipe } from '../../pipe/sort-by-search-term.pipe';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-artisan-list',
  imports: [RouterLink, NoteDirective, SortBySearchTermPipe],
  standalone: true,
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.scss'],
})
export class ArtisanListComponent implements OnInit {
  artisans: any[] = [];

  searchTerm: string = '';
  constructor(
    private ArtisanService: ArtisanService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.ArtisanService.getArtisans().subscribe((data) => {
      this.artisans = data;
    });

    this.searchService.currentSearchTerm.subscribe(
      (term) => (this.searchTerm = term)
    );
  }
}
