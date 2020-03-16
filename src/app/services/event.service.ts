import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Event } from '../models/event.model';
import { EVENTS } from './BACK';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getServices(): Observable<Event[]> {
    return of(EVENTS);
  }
}
