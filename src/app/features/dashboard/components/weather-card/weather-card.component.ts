import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  fiveDaysArray = [1,2,3,4,5];
  
  constructor() { }

  ngOnInit(): void {
  }

}
