import { Component, OnInit } from '@angular/core';

import { Game } from '../../models/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  selectedPage = 0;
  pageSize = 6;

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
      id: 2,
      name: 'Mario car',
      description: 'Super game with mario and cars',
      studio: 0,
      type: 'Race'
    },
    {
      id: 3,
      name: 'COD',
      description: 'Militar FPS',
      studio: 3,
      type: 'FPS'
    },
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
      id: 2,
      name: 'Mario car',
      description: 'Super game with mario and cars',
      studio: 0,
      type: 'Race'
    },
    {
      id: 3,
      name: 'COD',
      description: 'Militar FPS',
      studio: 3,
      type: 'FPS'
    },
    {
      id: 5,
      name: 'WAR',
      description: 'Militar WAR',
      studio: 3,
      type: 'WAR'
    }
  ];

  pags = Math.ceil(this.games.length / this.pageSize);

  constructor() { }

  ngOnInit(): void {
  }

  array(n: number): number[] {
    return [...Array(n).keys()];
  }

  previous(): void {
    this.selectedPage -= 1;
  }

  next(): void {
    this.selectedPage += 1;
  }

  to(p: number): void {
    this.selectedPage = p;
  }

}
