import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherApi } from './weather.api';
import { WeatherService } from './weather.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { CurrentDateCardComponent } from './components/current-date-card/current-date-card.component';
import { NextDateCardComponent } from './components/next-date-card/next-date-card.component';
import { FavoritesService } from '../favorites/favorites.service';



@NgModule({
  declarations: [
    WeatherCardComponent,
    CurrentDateCardComponent,
    NextDateCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxSpinnerModule,
  ],
  providers: [
    WeatherApi,
    WeatherService,
    FavoritesService
  ],
  exports: [
    WeatherCardComponent
  ]
})
export class WeatherCardModule { }
