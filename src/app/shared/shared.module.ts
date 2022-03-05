import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAutocompleteComponent } from './components/input-autocomplete/input-autocomplete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InputAutocompleteComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  exports: [
    InputAutocompleteComponent
  ]
})
export class SharedModule { }
