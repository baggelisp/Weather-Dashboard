import { ActionReducerMap } from '@ngrx/store';
import { dashboardReducer } from '../features/dashboard/dashboard.reducer';
import { favoritesReducer } from '../features/favorites/favorites.reducer';
import { weatherReducer } from '../features/weather-card/weather.reducer';

export const reducers: ActionReducerMap<any> = {
    dashboardReducer,
    favoritesReducer,
    weatherReducer
}