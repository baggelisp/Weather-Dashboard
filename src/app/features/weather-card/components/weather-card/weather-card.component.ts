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
      this.weatherService.setSelectedCounty("Athens");
    }
  }

  get citiesNames(): string[]{
    return cities.map(c => c.name)
  }

  get selectedCityName(): string {
    return this.weatherService.getSelectedCity()?.name;
  } 

  onSelectionChanged(event: any){
    this.weatherService.setSelectedCounty(event)
  }

  addToFavor(){
    const selectedCity = this.weatherService.getSelectedCity();
    this.weatherService.addToFavorite(selectedCity);
  }

}
