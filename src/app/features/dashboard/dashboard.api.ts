import { Injectable } from '@angular/core';
import { city } from 'src/app/constants/cities';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ApiResponseRootObject } from './OpenWeatherInterfaces';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class DashboardApi {

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
        current: {...currentObj},
        nextDates: [...nextDaysObj]
      }
    }));
  }
}


interface CurrentResponse {
  temp: number;
  humidity: number;
  icon: string;
  title: string;
  windSpeed: number
}

interface NextDateResponse {
  date: string;
  tempMin: number;
  tempMax: number;
  humidity: number;
  icon: string;
  title: string;
  windSpeed: number
}
export interface GetWeatherResponse {
  current: CurrentResponse;
  nextDates: NextDateResponse[];
}
