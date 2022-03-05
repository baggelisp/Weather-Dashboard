import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-date-card',
  templateUrl: './next-date-card.component.html',
  styleUrls: ['./next-date-card.component.scss']
})
export class NextDateCardComponent implements OnInit {
  
  @Input() temperature: number = 68;
  @Input() icon: string = 'sun';
  @Input() humidity: number = 51;

  constructor() { }

  ngOnInit(): void {
  }

}
