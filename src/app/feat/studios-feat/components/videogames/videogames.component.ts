import { Component, OnInit, Input } from '@angular/core';

import { Game } from '@shared/interfaces/game.model';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.scss']
})
export class VideogamesComponent implements OnInit {

  @Input() games: Game[];

  constructor() { }

  ngOnInit(): void {
  }

}
