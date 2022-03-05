import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers,{
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
  ],
  exports: [
  ]
})
export class CoreModule { }
