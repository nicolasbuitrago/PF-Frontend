import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';
import { ItemComponent } from '../../models/item.component.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit{

  selectedPage = 0;
  pageSize = 3;

  games: Game[] = [];

  pags = 0;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGames()
    .subscribe(games => this.games = games);
    this.pags = Math.ceil(this.games.length / this.pageSize);
  }

  isReady(): boolean {
    return true;
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
