import { Component, OnInit } from '@angular/core';
import {cities} from '../../../../constants/cities'
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  get citiesNames(): string[]{
    return cities.map(c => c.name)
  }

  onSelectionChanged(event: any){
    this.weatherService.setSelectedCounty(event)
  }

  addToFavor(){
    
  }

}
