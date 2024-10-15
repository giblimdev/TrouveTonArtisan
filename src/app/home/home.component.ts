import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArtisanService } from '../getartisans.service';
import { NoteComponent } from '../note/note.component';
import { SortByTopPipe } from '../pipe/sort-by-top.pipe';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NoteComponent, SortByTopPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  artisans: any[] = [];

  constructor(private ArtisanService: ArtisanService) {}

  ngOnInit(): void {
    this.ArtisanService.getArtisans().subscribe((data) => {
      this.artisans = data;
    });
  }
}
