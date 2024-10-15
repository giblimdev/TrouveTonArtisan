import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArtisanService } from '../../getartisans.service';
import { SortByCategoryPipe } from '../../pipe/sort-by-category.pipe';

@Component({
  selector: 'app-batiment',
  standalone: true,
  imports: [RouterLink, SortByCategoryPipe],
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss',
})
export class BatimentComponent {
  artisans: any[] = [];
  searchTerm: string = 'bâti';
  constructor(private ArtisanService: ArtisanService) {}

  ngOnInit(): void {
    this.ArtisanService.getArtisans().subscribe((data) => {
      this.artisans = data;
    });
  }
}
