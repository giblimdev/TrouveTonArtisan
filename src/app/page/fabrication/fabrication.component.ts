import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArtisanService } from '../../getartisans.service';
import { SortByCategoryPipe } from '../../pipe/sort-by-category.pipe';

@Component({
  selector: 'app-fabrication',
  standalone: true,
  imports: [RouterLink, SortByCategoryPipe],
  templateUrl: './fabrication.component.html',
  styleUrl: './fabrication.component.scss',
})
export class FabricationComponent {
  artisans: any[] = [];
  searchTerm: string = 'fabrication';
  constructor(private ArtisanService: ArtisanService) {}

  ngOnInit(): void {
    this.ArtisanService.getArtisans().subscribe((data) => {
      this.artisans = data;
    });
  }
}
