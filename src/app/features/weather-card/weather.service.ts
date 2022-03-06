import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { cities, city } from 'src/app/constants/cities';
import { NgxSpinnerService } from "ngx-spinner";
import { WeatherApi } from './weather.api';

@Injectable()
export class WeatherService {
  state$: Observable<any>;

  constructor(private store: Store<any>, 
    private spinner: NgxSpinnerService,
    private api: WeatherApi) {
    this.state$ = store.select('weatherReducer');
    this.setallCities(cities);
  }

  getAllCitiesObj(cityName: string){
    return this.state$.pipe(select(state => state[cityName]['allCities']));
  }
  getSelectedCityObj(cityName: string){
    return this.state$.pipe(select(state => state[cityName]['selectedCity']));
  }
  getCurrentWeatherObj(cityName: string){
    return this.state$.pipe(select(state => state[cityName]['currentWeather']));
  }
  getNextDaysWeatherObj(cityName: string){
    return this.state$.pipe(select(state => state[cityName]['nextDaysWeather']));
  }
  

  setallCities(cities: city[]) {
    this.store.dispatch({ type: `SET_ALL_CITIES`, payload:{allCities: [...cities], id: cities[0].name}  }); 
  }

  setSelectedCounty(cityName: string) {
    const allCities: city[] = cities;
    const selectedCity: city | any = allCities.find( c => c.name == cityName);
    this.store.dispatch({ type: `SET_SELECTED_CITY`, payload:{selectedCity: {...selectedCity}, id: cityName}  });    
    this.getWeather(selectedCity); 
  }

  getAllCities(){
    return cities;
  }

  getCityFromName(cityName: string): city{
    return cities.find( c => c.name == cityName) || cities[0];
  }

  getWeather(city: city){
    this.spinner.show();
    this.api.getWeather(city).subscribe( (response: GetWeatherResponse) => {
      this.store.dispatch({ type: `SET_WEATHER`, payload:{current: {...response.current}, nextDates: [...response.nextDates], id: city.name}  });    
      this.spinner.hide();
    })
  }

  addToFavorite(selectedCity: city) {
    this.api.addToFavorite(selectedCity).subscribe( (response: string[]) => {
      this.store.dispatch({ type: `SET_FAV_CITIES`, payload: response });  
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