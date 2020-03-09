import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CarouselItem } from '../models/carousel-item.model';
import { Testimonio } from '../models/testimonio.model';
import { ComponentItem } from '../models/component-item.model';
import { ITEMS, TESTIMONIOS, HOME } from './BACK';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getHome(): Observable<ComponentItem[]> {
    return of(HOME);
  }

  getTestimonios(): Observable<Testimonio[]> {
    return of(TESTIMONIOS);
  }

  getItems(): Observable<CarouselItem[]> {
    return of(ITEMS);
  }
}
