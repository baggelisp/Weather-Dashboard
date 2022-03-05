
const initialState ={
  allCountries: [],
  selectedCountry: '',
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function dashboardReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    case 'SET_ALL_COUNTRIES':
      return {
            ...state,
            allCountries: [...payload]
          }
    case 'SET_SELECTED_COUNTRY':
      return {
          ...state,
          selectedCountry: payload
        }
    default:
      return state;
  }

}