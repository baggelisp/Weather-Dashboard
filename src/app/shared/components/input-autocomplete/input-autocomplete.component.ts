import { Component, Input, OnInit  } from '@angular/core';

export interface Options {
  optionName: string;
  value: string | number;
}

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html'
})
export class InputAutocompleteComponent implements OnInit  {

  @Input() name: string = '';
  @Input() options: Options[] = [];


  constructor() { }

  ngOnInit(): void {

  }



}
