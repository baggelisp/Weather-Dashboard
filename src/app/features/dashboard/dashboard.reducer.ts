import { city } from "src/app/constants/cities";

interface initialStateInt {
  allCities: city[];
  selectedCity: city | any;
}

const initialState: initialStateInt ={
  allCities: [],
  selectedCity: {},
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
    default:
      return state;
  }

}