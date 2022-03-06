import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-date-card',
  templateUrl: './current-date-card.component.html',
  styleUrls: ['./current-date-card.component.scss']
})
export class CurrentDateCardComponent implements OnInit {

  @Input() temperature: number = 68;
  @Input() icon: string = '10d';
  @Input() city: string = 'New York';
  @Input() humidity: number = 51;
  @Input() windSpeed: number = 51;

  constructor() { }

  ngOnInit(): void {
  }

}
