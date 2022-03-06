import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavoritesComponent } from './favorites.component';
import { FavoritesService } from './favorites.service';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavoritesRoutingModule
  ],
  providers: [
    FavoritesService
  ]
})
export class FavoritesModule { }
