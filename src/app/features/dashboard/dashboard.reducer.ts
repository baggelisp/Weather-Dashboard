import { city } from "src/app/constants/cities";
import { CurrentResponse, NextDateResponse } from "./dashboard.service";

interface initialStateInt {
  allCities: city[];
  selectedCity: city | any;
  currentWeather: CurrentResponse | any;
  nextDaysWeather: NextDateResponse[];
}

const initialState: initialStateInt ={
  allCities: [],
  selectedCity: {},
  currentWeather: {},
  nextDaysWeather: []
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function dashboardReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    case 'SET_ALL_CITIES':
      return {
            ...state,
            allCities: [...payload]
          }
    case 'SET_SELECTED_CITY':
      return {
          ...state,
          selectedCity: payload
        }
    case 'SET_WEATHER':
      return {
          ...state,
          currentWeather: payload.current,
          nextDaysWeather: payload.nextDates
        }
    default:
      return state;
  }

}