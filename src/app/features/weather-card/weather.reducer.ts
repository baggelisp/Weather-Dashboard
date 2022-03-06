import { cities, city } from "src/app/constants/cities";
import { CurrentResponse, NextDateResponse } from "./weather.service";

interface initialStateInt {
  [currentCityName: string]: CurrentCityWeather;
}

interface CurrentCityWeather {
  currentWeather: CurrentResponse | any;
  nextDaysWeather: NextDateResponse[];
  allCities: city[];
  selectedCity: city | any;
}

let innerObj = {
  currentWeather: {},
  nextDaysWeather: [],
  allCities: [],
  selectedCity: {},
}
const initialState: initialStateInt =cities.map(c=> c.name).reduce((acc:any,curr:any)=> (acc[curr]={...innerObj},acc),{});

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function weatherReducer(state = initialState, { type, payload }: ActionWithPayload) {
  switch (type) {
    case 'SET_ALL_CITIES':
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          allCities: [...payload.allCities]
        }
      }
    case 'SET_SELECTED_CITY':
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          selectedCity: {...payload.selectedCity}
        }
      }
    case 'SET_WEATHER':
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          currentWeather: {...payload.current},
          nextDaysWeather: [...payload.nextDates]
        }
      }
    default:
      return state;
  }

}