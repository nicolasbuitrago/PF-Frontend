import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CarouselComponent } from '../components/carousel/carousel.component';
import { TestimoniosComponent } from '../components/testimonios/testimonios.component';
import { SectionComponent } from '../components/sections/section/section.component';
import { SectionImgBgComponent } from '../components/sections/section-img-bg/section-img-bg.component';
import { GamesComponent } from '../components/games/games.component';
import { CarouselItem } from '../models/carousel-item.model';
import { Testimonio } from '../models/testimonio.model';
import { ComponentItem } from '../models/component-item.model';
import { HOME } from './BACK';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getHome(): Observable<ComponentItem[]> {
    const items: ComponentItem[] = [];
    for (const item of HOME) {
      switch (item.component) {
        case 'CarouselComponent': {
          items.push({
            component: CarouselComponent,
            data: item.data
          });
          break;
        }
        case 'TestimoniosComponent': {
          items.push({
            component: TestimoniosComponent,
            data: item.data
          });
          break;
        }
        case 'SectionComponent': {
          items.push({
            component: SectionComponent,
            data: item.data
          });
          break;
        }
        case 'GamesComponent': {
          items.push({
            component: GamesComponent,
            data: item.data
          });
          break;
        }
        case 'SectionImgBgComponent': {
          items.push({
            component: SectionImgBgComponent,
            data: item.data
          });
          break;
        }
      }
    }
    return of(items);
  }
}
