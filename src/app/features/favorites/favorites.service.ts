import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
@Injectable()
export class FavoritesService {
  
  constructor(private store: Store<any>) {
    const state$ = store.select('favoritesReducer');
   }

}
