import { Component, OnInit } from '@angular/core';
import {cities} from '../../../../constants/cities'
import { DashboardService } from '../../dashboard.service';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  constructor(public dashboardService: DashboardService) { }

  fiveDaysArray = [1,2,3,4,5]

  ngOnInit(): void {
  }

  get citiesNames(): string[]{
    return cities.map(c => c.name)
  }

  onSelectionChanged(event: any){
    this.dashboardService.setSelectedCounty(event)
  }

  addToFavor(){
    
  }

}
