import { Component, OnInit } from '@angular/core';

import { Game } from '../../models/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  pags = 3;
  selectedPage = 2;

  games: Game[] = [
    {
      id: 0,
      name: 'Mario bros',
      description: 'Super game with mario',
      studio: 0,
      type: 'Arcade'
    },
    {
      id: 1,
      name: 'PES 2020',
      description: 'Soccer game',
      studio: 2,
      type: 'Sports'
    },
    {
      id: 3,
      name: 'Mario car',
      description: 'Super game with mario and cars',
      studio: 0,
      type: 'Race'
    },
    {
      id: 4,
      name: 'COD',
      description: 'Militar FPS',
      studio: 3,
      type: 'FPS'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  array(n: number): number[] {
    return [...Array(n).keys()];
  }

}
