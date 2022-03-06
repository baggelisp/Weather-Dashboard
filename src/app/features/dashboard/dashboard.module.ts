import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { DashboardApi } from './dashboard.api';
import { WeatherCardModule } from '../weather-card/weather-card.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    WeatherCardModule
  ],
  providers: [
    DashboardService,
    DashboardApi
  ]
})
export class DashboardModule { }
