import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { cities } from '../../constants/cities'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public service: DashboardService) { }

  ngOnInit(): void {
    
  }

}
