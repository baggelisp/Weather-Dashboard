import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/features/favorites/favorites.service';
import {cities} from '../../../../constants/cities'
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() hasSearch: boolean = true;
  @Input() inputCityName: string = '';


  constructor(public weatherService: WeatherService,
    public favoritesService: FavoritesService) { }

  ngOnInit(): void {
    if (this.inputCityName != '') {
      this.weatherService.setSelectedCounty(this.inputCityName);
    } else {
      // Default selected city
      this.inputCityName = "Athens"
      this.weatherService.setSelectedCounty("Athens");
    }
  }

  get citiesNames(): string[]{
    return cities.map(c => c.name)
  }

  onSelectionChanged(event: any){
    this.inputCityName = event;
    this.weatherService.setSelectedCounty(event)
  }

  addToFavor(){
    const selectedCity = this.weatherService.getCityFromName(this.inputCityName);
    this.weatherService.addToFavorite(selectedCity);
  }

}
