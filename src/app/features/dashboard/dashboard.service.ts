import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
@Injectable()
export class DashboardService {
  
  constructor(private store: Store<any>) {
    const state$ = store.select('dashboardReducer');
   }

}
