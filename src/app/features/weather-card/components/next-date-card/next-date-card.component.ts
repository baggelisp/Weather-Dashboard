import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-date-card',
  templateUrl: './next-date-card.component.html',
  styleUrls: ['./next-date-card.component.scss']
})
export class NextDateCardComponent implements OnInit {
  
  @Input() dateName: string = '';
  @Input() tempMax: number = 0;
  @Input() tempMin: number = 0;
  @Input() icon: string = '10d';
  @Input() humidity: number = 0;
  @Input() windSpeed: number = 0;
  @Input() title: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
