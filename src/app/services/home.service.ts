import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CarouselItem } from '../models/carousel-item.model';
import { Testimonio } from '../models/testimonio.model';
import { ITEMS } from './BACK';
import { TESTIMONIOS } from './BACK';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getTestimonios(): Observable<Testimonio[]> {
    return of(TESTIMONIOS);
  }

  getItems(): Observable<CarouselItem[]> {
    return of(ITEMS);
  }
}
