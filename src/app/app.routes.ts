import { Routes, provideRouter } from '@angular/router';
import { ArtisanListComponent } from './artisan/artisan-list/artisan-list.component';
import { ArtisanProfileComponent } from './artisan/artisan-profile/artisan-profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { BatimentComponent } from './page/batiment/batiment.component';
import { ServiceComponent } from './page/service/service.component';
import { FabricationComponent } from './page/fabrication/fabrication.component';
import { AlimentationComponent } from './page/alimentation/alimentation.component';
export const routes: Routes = [
  {
    path: 'artisans/:id',
    component: ArtisanProfileComponent,
    title: 'Artisant',
  },
  { path: 'artisans', component: ArtisanListComponent, title: 'Artisans' },
  {
    path: 'batiment',
    component: BatimentComponent,
    title: 'Artisans du bâtiment',
  },
  {
    path: 'service',
    component: ServiceComponent,
    title: 'Artisans des métiers de  Service',
  },
  {
    path: 'fabrication',
    component: FabricationComponent,
    title: 'Artisant fabriquant',
  },
  {
    path: 'alimentation',
    component: AlimentationComponent,
    title: 'Artisants des métiers de bouche',
  },
  { path: 'home', component: HomeComponent, title: 'Accueil' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent, title: '404' },
];
