const initialState = {
  currentCity: {
    name: 'Your location',
    Key: null,
  },
  favorites: [],
  theme: 'light',
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CURRENT_CITY':
      return {
        ...state,
        currentCity: action.payload,
      };
    case 'ADD_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(
          fav => fav.Key !== action.payload.Key
        ),
      };
    case 'UPDATE_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
