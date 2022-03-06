import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavoritesComponent } from './favorites.component';
import { FavoritesService } from './favorites.service';
import { WeatherCardModule } from '../weather-card/weather-card.module';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavoritesRoutingModule,
    WeatherCardModule
  ],
  providers: [
    FavoritesService
  ]
})
export class FavoritesModule { }
