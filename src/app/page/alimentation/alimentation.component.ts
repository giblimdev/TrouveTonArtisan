import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SortByCategoryPipe } from '../../pipe/sort-by-category.pipe';
import { ArtisanService } from '../../getartisans.service';

@Component({
  selector: 'app-alimentation',
  standalone: true,
  imports: [RouterLink, SortByCategoryPipe],
  templateUrl: './alimentation.component.html',
  styleUrl: './alimentation.component.scss',
})
export class AlimentationComponent {
  artisans: any[] = [];
  searchTerm: string = 'alimentation';
  constructor(private ArtisanService: ArtisanService) {}

  ngOnInit(): void {
    this.ArtisanService.getArtisans().subscribe((data) => {
      this.artisans = data;
    });
  }
}
