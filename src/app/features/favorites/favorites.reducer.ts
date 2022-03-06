interface initialStateInt {
}

const initialState: initialStateInt ={
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function favoritesReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    default:
      return state;
  }

}