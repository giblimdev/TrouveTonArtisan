//getartisans.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Artisan, ArtisanModel } from './artisan.model';

@Injectable({
  providedIn: 'root',
})
export class ArtisanService {
  private apiUrl = 'http://localhost:3000/artisans';

  constructor(private http: HttpClient) {}

  getArtisans(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getArtisanById(id: number): Observable<any> {
    return this.http.get<Artisan>(`${this.apiUrl}/${id}`);
  }
}
