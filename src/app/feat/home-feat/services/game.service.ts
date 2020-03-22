import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Game } from '@shared/interfaces/game.model';
import { GAMES } from './BACK';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(GAMES);
  }
}
