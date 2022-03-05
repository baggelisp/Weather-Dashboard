import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';

export interface Options {
  optionName: string;
  value: string | number;
}

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html'
})
export class InputAutocompleteComponent implements OnInit  {

  myControl = new FormControl();
  filteredOptions: Observable<string[]> = of([]);
  @Input() options: string[]  = [];
  @Output() optionSelected = new EventEmitter<string>();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSelectionChanged(event: any) {
    this.optionSelected.emit(event.option.value);
  }



}
