import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
})
export class NoteComponent {
  /*artisans: any[] = [];
  
  constructor(private ArtisanService: ArtisanService) {}

  ngOnInit(): void {
    this.ArtisanService.getArtisans().subscribe((data) => {
      this.artisans = data;
    });
  }*/
  noteWidth = '40px';
}
