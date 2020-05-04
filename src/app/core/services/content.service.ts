import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, ReplaySubject, Subject, merge } from 'rxjs';
import { delay, share, tap, shareReplay, refCount, catchError, map } from 'rxjs/operators';

import { CarouselComponent } from '@feat/home-feat/components/carousel/carousel.component';
import { TestimoniosComponent } from '@feat/home-feat/components/testimonios/testimonios.component';
import { SectionComponent } from '@feat/home-feat/components/sections/section/section.component';
import { ContactInfoComponent } from '@app/feat/home-feat/components/contact-info/contact-info.component';
// import { SectionImgBgComponent } from '@feat/home-feat/components/sections/section-img-bg/section-img-bg.component';
import { GamesComponent } from '@feat/home-feat/components/games/games.component';
import { environment } from '@env/environment';
import { ComponentItem, ComponentType, ResourceType } from '@shared/interfaces/component-item.model';
import { Event } from '@shared/interfaces/event.model';
import { Game } from '@shared/interfaces/game.model';
import { HOME, EVENTS, GAMES, ABOUT, CONTACT, FOOTER } from './BACK';
import { Contact } from '@shared/interfaces/contact.model';
import { About } from '@shared/interfaces/about.model';
// import { FaqItem } from '@shared/interfaces/faqitem.model';
import { Footer } from '@shared/interfaces/footer.model';
import { Page } from '@shared/interfaces/page.model';
import { StudiosListComponent } from '@app/feat/studios-feat/components/studios-list/studios-list.component';
import { EventsListComponent } from '@app/feat/home-feat/components/events-list/events-list.component';
import { SponsorsComponent } from '@app/feat/home-feat/components/sponsors/sponsors.component';
import { NewsComponent } from '@app/feat/home-feat/components/news/news.component';
import { MentorsComponent } from '@app/feat/home-feat/components/mentors/mentors.component';
import { ServicesComponent } from '@app/feat/home-feat/components/services/services.component';
import { FaqsComponent } from '@app/feat/home-feat/components/faqs/faqs.component';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private urlPages = `${environment.apiUrl}/pages`;
  // private urlSections = `${environment.apiUrl}/texts`;
  // private urlCarousel = `${environment.apiUrl}/carousels`;
  // private urlTestimonios = `${environment.apiUrl}/testimonies`;

  private meetUpGroup = 'Swifticious';
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

  getPages() {
    return this.http.get<Page[]>(this.urlPages);
  }

  private setComponents(page: Page) {
    for (const component of page.components) {
      if ((component as any).resource) {
        component.data = (component as any).resource;
      }
      if (component.type === ComponentType.RESOURCE_LIST) {
        switch (component.resource_type) {
          case ResourceType.STUDIO:
            component.component = StudiosListComponent;
            break;
          case ResourceType.EVENT:
            component.component = EventsListComponent;
            break;
          case ResourceType.SPONSOR:
            component.component = SponsorsComponent;
            break;
          case ResourceType.NEWITEM:
            component.component = NewsComponent;
            break;
          case ResourceType.MENTOR:
            component.component = MentorsComponent;
            break;
          case ResourceType.FAQITEM:
            component.component = FaqsComponent;
            break;
          case ResourceType.SERVICE:
            component.component = ServicesComponent;
            break;
        }
      } else {
        switch (component.resource_type) {
          case ComponentType.CAROUSEL: {
            component.component = CarouselComponent;
            break;
          }
          case ComponentType.TESTIMONIOS: {
            component.component = TestimoniosComponent;
            break;
          }
          case ComponentType.SECTION: {
            component.component = SectionComponent;
            break;
          }
          case ComponentType.CONTACT_INFORMATION: {
            component.component = ContactInfoComponent;
            break;
          }
          // case 'GamesComponent': {
          //   component.component = GamesComponent;
          //   break;
          // }
          // case 'SectionImgBgComponent': {
          //   component.component = CarouselComponent;
          //   break;
          // }
        }
      }
    }
    return page;
  }

  getPage(id: string) {
    return this.http.get<Page>(`${this.urlPages}/${id}`).pipe(
      map(this.setComponents)
    );
  }

  getMainPage() {
    return this.http.get<Page>(`${this.urlPages}/main`).pipe(
      // delay(90000),
      map(this.setComponents)
    );
  }

  // getHome(): Observable<ComponentItem[]> {
  //   const items: ComponentItem[] = [];
  //   for (const item of HOME) {
  //     switch (item.component) {
  //       case ComponentType.CAROUSEL: {
  //         items.push({
  //           component: CarouselComponent,
  //           data: item.data
  //         });
  //         break;
  //       }
  //       case ComponentType.TESTIMONIOS: {
  //         items.push({
  //           component: TestimoniosComponent,
  //           data: item.data
  //         });
  //         break;
  //       }
  //       case 'SectionComponent': {
  //         items.push({
  //           component: SectionComponent,
  //           data: item.data
  //         });
  //         break;
  //       }
  //       case 'GamesComponent': {
  //         items.push({
  //           component: GamesComponent,
  //           data: item.data
  //         });
  //         break;
  //       }
  //       case 'SectionImgBgComponent': {
  //         items.push({
  //           component: SectionImgBgComponent,
  //           data: item.data
  //         });
  //         break;
  //       }
  //     }
  //   }
  //   return of(items);
  // }

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

  /** GET meets. Will 404 if id not found */
  getMeetUp() {
    // this.httpOptions.params.append('email', email);
    return this.http.get<any>(
      `https://cors-anywhere.herokuapp.com/https://api.meetup.com/${this.meetUpGroup}?&sign=true&photo-host=public`
    ).pipe(
      tap(_ => this.log('fetched meetUp group')),
      // map((data: any[]) => data.map(item => ))
      // catchError(this.handleError<any[]>('getEvents', []))
    );
  }

  /** GET meets. Will 404 if id not found */
  getEventsMeetUp() {
    // this.httpOptions.params.append('email', email);
    return this.http.get<any[]>(
      `https://cors-anywhere.herokuapp.com/https://api.meetup.com/${this.meetUpGroup}/events?&sign=true&photo-host=public&page=20`
    ).pipe(
      tap(_ => this.log('fetched events of meetUp')),
      // map((data: any[]) => data.map(item => ))
      // catchError(this.handleError<any[]>('getEvents', []))
    );
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

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  log(msg: string) {
    console.log(msg);
  }
}
