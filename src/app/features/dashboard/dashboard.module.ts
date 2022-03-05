import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { DashboardService } from './dashboard.service';
import { DashboardApi } from './dashboard.api';
import { CurrentDateCardComponent } from './components/current-date-card/current-date-card.component';
import { NextDateCardComponent } from './components/next-date-card/next-date-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    WeatherCardComponent,
    CurrentDateCardComponent,
    NextDateCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [
    DashboardService,
    DashboardApi
  ]
})
export class DashboardModule { }
