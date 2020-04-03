import { Component, OnInit, Input } from '@angular/core';

// import { ContentService } from '@core/services/content.service';
import { Game } from '@shared/interfaces/game.model';
import { ItemComponent } from '../../models/item.component.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, ItemComponent {

  @Input() data: any;
  selectedPage = 0;
  pageSize = 3;

  games: Game[];

  pags = 0;

  constructor() { }

  ngOnInit(): void {
    // this.getGames();
    this.games = this.data.games;
  }

  // getGames(): void {
  //   this.contentService.getGames()
  //   .subscribe(games => this.games = games);
  //   this.pags = Math.ceil(this.games.length / this.pageSize);
  // }

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
