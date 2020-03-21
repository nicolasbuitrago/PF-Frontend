import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Studio } from '../models/studio.model';
import { STUDIOS } from './BACK';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  constructor() { }

  getStudios(): Observable<Studio[]> {
    return of(STUDIOS);
  }

  getStudio(id: number): Observable<Studio> {
    return of(STUDIOS.find(studio => studio.id === id));
  }
}
