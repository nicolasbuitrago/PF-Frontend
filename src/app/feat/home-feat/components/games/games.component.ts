import { Component, OnInit, Input } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/public_api';
import { DataItem } from '@shared/interfaces/data-item.model';
import { Game } from '@shared/interfaces/game.model';
import { ResourceType } from '@shared/interfaces/component-item.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, DataItem {

  @Input() resources: Game[];
  games: Game[];
  selectedGames: Game[];
  itemsPerPage = 3;
  resourceType: string;
  viewResult: boolean;

  constructor() {
    this.resourceType = ResourceType.GAME;
  }

  ngOnInit(): void {
    this.games = this.resources;
    this.selectedGames = this.resources.slice(0, this.itemsPerPage);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.selectedGames = this.games.slice(startItem, endItem);
  }

  searchResult(data) {
    this.viewResult = true;
    this.games = data as Game[];
    this.selectedGames = this.games.slice(0, this.itemsPerPage);
  }

  clear() {
    this.viewResult = false;
    this.games = this.resources;
    this.selectedGames = this.resources.slice(0, this.itemsPerPage);
  }

}
