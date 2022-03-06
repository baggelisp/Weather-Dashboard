import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Injectable()
export class FavoritesService {
  
  public readonly favoriteCities$: Observable<string[]>;

  constructor(private store: Store<any>) {
    const state$ = store.select('favoritesReducer');
    this.favoriteCities$  = state$.pipe(select(state => state['favoriteCities']));

    this.setDefaultFavCities()
   }

  setDefaultFavCities() {
    let favCities: any[] = JSON.parse(localStorage.getItem("cities") || '[]');
    this.setfavoriteCities(favCities);
  }

  setfavoriteCities(cities: string[]) {
    this.store.dispatch({ type: `SET_FAV_CITIES`, payload: [...cities] });    
  }

  getfavoriteCities(){
    let cities: string[] = [];
    this.favoriteCities$.subscribe( c => {
      cities = [...c]
    });
    return cities;
  }

  isCityInFavorites(cityName: string): boolean {
    const favCities = this.getfavoriteCities();
    return favCities.includes(cityName)
  }

}
