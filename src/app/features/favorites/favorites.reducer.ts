interface initialStateInt {
  favoriteCities: string[];
}

const initialState: initialStateInt ={
  favoriteCities: []
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function favoritesReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    case 'SET_FAV_CITIES':
      return {
            ...state,
            favoriteCities: [...payload]
          }
    default:
      return state;
  }

}