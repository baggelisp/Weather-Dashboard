import { Component, OnInit } from '@angular/core';
import { Options } from 'src/app/shared/components/input-autocomplete/input-autocomplete.component';
import {cities} from '../../../../constants/cities'
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  constructor() { }

  fiveDaysArray = [1,2,3,4,5]

  ngOnInit(): void {
  }

  get citiesNames(): string[]{
    return cities.map(c => c.name)
  }

  onSelectionChanged(event: any){
    console.log(event)
  }

  addToFavor(){
    console.log('Added to favs')
  }

}
