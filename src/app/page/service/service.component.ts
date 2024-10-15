import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArtisanService } from '../../getartisans.service';
import { SortByCategoryPipe } from '../../pipe/sort-by-category.pipe';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterLink, SortByCategoryPipe],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  artisans: any[] = [];

  searchTerm: string = 'service';
  constructor(private ArtisanService: ArtisanService) {}

  ngOnInit(): void {
    this.ArtisanService.getArtisans().subscribe((data) => {
      this.artisans = data;
    });
  }
}
