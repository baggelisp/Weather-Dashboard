import { Component, OnInit } from '@angular/core';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favCities: string[] = [];

  constructor(public favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favCities = this.favoritesService.getfavoriteCities();
  }

}
