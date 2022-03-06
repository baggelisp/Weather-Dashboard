import { Injectable } from '@angular/core';
import { city } from 'src/app/constants/cities';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CurrentResponse, GetWeatherResponse, NextDateResponse } from './weather.service';
import { ApiResponseRootObject } from './models/OpenWeatherInterfaces';

@Injectable()
export class WeatherApi {

  constructor(private http: HttpClient) { }

  getWeather(city: city): GetWeatherResponse | any{
    return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&appid=${environment.apiKey}`)
    .pipe(map( function(response: ApiResponseRootObject | any) {
      let currentObj: CurrentResponse = {
        temp: response.current.temp,
        humidity: response.current.humidity,
        icon: response.current.weather[0].icon,
        title: response.current.weather[0].main,
        windSpeed: response.current.wind_speed,
      };
      let nextDaysObj: NextDateResponse[] = [];
      response.daily.slice(1, 6).forEach((element:any) => {
        let nextDayObj: NextDateResponse = {
          date: new Date(element.dt * 1000).toLocaleString('en-US', {weekday: 'long'}),
          tempMin: element.temp.min,
          tempMax: element.temp.max,
          humidity: element.humidity,
          icon: element.weather[0].icon,
          title: element.weather[0].main,
          windSpeed: element.wind_speed
        };
        nextDaysObj.push({...nextDayObj})
      });
      return {
        cityName: city.name,
        current: {...currentObj},
        nextDates: [...nextDaysObj]
      }
    }));
  }

  addToFavorite(selectedCity: city): Observable<string[]> {
    let favCities: any[] = JSON.parse(localStorage.getItem("cities") || '[]');
    favCities.indexOf(selectedCity.name) === -1 ? favCities.push(selectedCity.name) : favCities = favCities.filter(city=> city != selectedCity.name);
    localStorage.setItem("cities", JSON.stringify(favCities));
    return of(favCities)
  }

}



