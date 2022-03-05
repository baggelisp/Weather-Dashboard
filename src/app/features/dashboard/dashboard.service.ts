import { Injectable } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { city } from 'src/app/constants/cities';
import { DashboardApi } from './dashboard.api';

@Injectable()
export class DashboardService {
  public readonly allCities$: Observable<city[]>;
  public readonly selectedCity$: Observable<string>;
  
  constructor(private store: Store<any>, private api: DashboardApi) {
    const state$ = store.select('dashboardReducer');
    this.allCities$  = state$.pipe(select(state => state['allCities']));
    this.selectedCity$  = state$.pipe(select(state => state['selectedCity']));
   }

  setallCities(cities: city[]) {
    this.store.dispatch({ type: `SET_ALL_CITIES`, payload: [...cities] });    
  }

  setSelectedCounty(cityName: string) {
    const allCities: city[] = this.getAllCities();
    const selectedCity: city | any = allCities.find( c => c.name == cityName);
    this.store.dispatch({ type: `SET_SELECTED_CITY`, payload: selectedCity });  
    this.getWeather(selectedCity); 
  }

  getAllCities(){
    let cities: city[] = [];
    this.allCities$.subscribe( c => {
      cities = [...c]
    });
    return cities;
  }

  getWeather(city: city){
    this.api.getWeather(city).subscribe( (w:any) => {
      console.log(w)
    })
  }

}
