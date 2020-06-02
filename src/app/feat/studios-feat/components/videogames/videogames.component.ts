import { Component, OnInit, Input } from '@angular/core';

import { Game } from '@shared/interfaces/game.model';
import { ResourceType } from '@app/shared/interfaces/component-item.model';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.scss']
})
export class VideogamesComponent implements OnInit {

  @Input() games: Game[];
  selectedGames: Game[];
  counter = 3;
  resourceType: string;
  viewResult: boolean;

  constructor() {
    this.resourceType = ResourceType.GAME;
  }

  ngOnInit(): void {
    this.selectedGames = this.games.slice(0, this.counter);
  }

  loadMore() {
    this.counter += 6;
    this.selectedGames = this.games.slice(0, this.counter);
  }

  searchResult(data) {
    this.viewResult = true;
    this.selectedGames = data as Game[];
  }

  clear() {
    this.viewResult = false;
    this.selectedGames = this.games.slice(0, this.counter);
  }

}
