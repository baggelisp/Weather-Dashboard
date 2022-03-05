import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { city } from 'src/app/constants/cities';

@Injectable()
export class DashboardService {
  public readonly allCountries$: Observable<city[]>;
  public readonly selectedCountry$: Observable<string>;
  
  constructor(private store: Store<any>,) {
    const state$ = store.select('dashboardReducer');
    this.allCountries$  = state$.pipe(select(state => state['allCountries']));
    this.selectedCountry$  = state$.pipe(select(state => state['selectedCountry']));
   }

  setAllCountries(countries: city[]) {
    this.store.dispatch({ type: `SET_ALL_COUNTRIES`, payload: [...countries] });    
  }
  setSelectedCounty(countyName: string) {
    this.store.dispatch({ type: `SET_SELECTED_COUNTRY`, payload: countyName });    
  }
}
