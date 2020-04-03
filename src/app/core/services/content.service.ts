import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ReplaySubject, Subject, merge } from 'rxjs';
import { delay, share, tap, shareReplay, refCount } from 'rxjs/operators';

import { CarouselComponent } from '@feat/home-feat/components/carousel/carousel.component';
import { TestimoniosComponent } from '@feat/home-feat/components/testimonios/testimonios.component';
import { SectionComponent } from '@feat/home-feat/components/sections/section/section.component';
import { SectionImgBgComponent } from '@feat/home-feat/components/sections/section-img-bg/section-img-bg.component';
import { GamesComponent } from '@feat/home-feat/components/games/games.component';

import { ComponentItem } from '@shared/interfaces/component-item.model';
import { Event } from '@shared/interfaces/event.model';
import { Game } from '@shared/interfaces/game.model';
import { HOME, EVENTS, GAMES, ABOUT, CONTACT, FOOTER } from './BACK';
import { Contact } from '@shared/interfaces/contact.model';
import { About } from '@shared/interfaces/about.model';
import { Footer } from '@app/shared/interfaces/footer.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  events$: Observable<Event[]>;

  private infiniteGames$: Observable<any>;
  games$: Observable<Game[]>;

  constructor(private http: HttpClient) {
    this.infiniteGames$ = new Subject<void>().asObservable();
    this.games$ = merge(
      of(GAMES).pipe(tap(() => console.log('***SIDE EFFECT***')))
      // this
      //   .http
      //   .get<Game[]>('some-url')
        // first share, in the example it's been written before using the merge and infiniteStream$
        // .pipe(share())
        ,
      this.infiniteGames$
    ).pipe(shareReplay(1));
  }

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

  getEvents(): Observable<Event[]> {
    // if (!this.events$) {
    //   // this.events$ = this.http.get<Event[]>('url')
    //   // .pipe(shareReplay(1))
    //   // .pipe(refCount());
    //   this.events$ =  of(EVENTS).pipe(
    //     tap(() => console.log('***SIDE EFFECT***')),
    //     delay(5000)
    //   ).pipe(shareReplay(1))
    //   .pipe(refCount());
    // }

    return of(EVENTS);
  }

  getGames(): Observable<Game[]> {
    return of(GAMES);
  }

  games(): Observable<Game[]> {
    return this.games$;
  }

  getContact(): Observable<Contact> {
    return of(CONTACT);
  }

  getAbout(): Observable<About> {
    return of(ABOUT);
  }

  getFooter(): Observable<Footer> {
    return of(FOOTER);
  }
}
