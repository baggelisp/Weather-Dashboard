import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cities, city } from 'src/app/constants/cities';
import { NgxSpinnerService } from "ngx-spinner";
import { WeatherApi } from './weather.api';

@Injectable()
export class WeatherService {
  public readonly allCities$: Observable<city[]>;
  public readonly selectedCity$: Observable<city>;
  public readonly currentWeather$: Observable<CurrentResponse>;
  public readonly nextDaysWeather$: Observable<NextDateResponse[]>;

  
  constructor(private store: Store<any>, 
    private spinner: NgxSpinnerService,
    private api: WeatherApi) {
    const state$ = store.select('weatherReducer');
    this.allCities$  = state$.pipe(select(state => state['allCities']));
    this.selectedCity$  = state$.pipe(select(state => state['selectedCity']));
    this.currentWeather$  = state$.pipe(select(state => state['currentWeather']));
    this.nextDaysWeather$  = state$.pipe(select(state => state['nextDaysWeather']));

    this.setallCities(cities);
    this.setSelectedCounty('Athens');
   }

  setallCities(cities: city[]) {
    this.store.dispatch({ type: `SET_ALL_CITIES`, payload: [...cities] });    

    this.currentWeather$.subscribe(a => {
      console.log(a)
    })
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
    this.spinner.show();
    this.api.getWeather(city).subscribe( (response: GetWeatherResponse) => {
      console.log(response)
      this.store.dispatch({ type: `SET_WEATHER`, payload: response });  
      this.spinner.hide();
    })
  }

}


// INTERFACES
export interface CurrentResponse {
  temp: number;
  humidity: number;
  icon: string;
  title: string;
  windSpeed: number
}

export interface NextDateResponse {
  date: string;
  tempMin: number;
  tempMax: number;
  humidity: number;
  icon: string;
  title: string;
  windSpeed: number
}
export interface GetWeatherResponse {
  cityName: string;
  current: CurrentResponse;
  nextDates: NextDateResponse[];
}