import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, Subject, merge, BehaviorSubject } from 'rxjs';
import { delay, share, tap, catchError, map } from 'rxjs/operators';

import { CarouselComponent } from '@feat/home-feat/components/carousel/carousel.component';
import { TestimoniosComponent } from '@feat/home-feat/components/testimonios/testimonios.component';
import { SectionComponent } from '@feat/home-feat/components/section/section.component';
import { ContactInfoComponent } from '@feat/home-feat/components/contact-info/contact-info.component';
// import { RegisterFormComponent } from '@app/feat/home-feat/components/forms/register-form/register-form.component';

// import { SectionImgBgComponent } from '@feat/home-feat/components/sections/section-img-bg/section-img-bg.component';
import { environment } from '@env/environment';
import { AppRouter } from '@shared/interfaces/router.model';
import { ComponentItem, ComponentType, ResourceType } from '@shared/interfaces/component-item.model';
import { Event } from '@shared/interfaces/event.model';
import { Game } from '@shared/interfaces/game.model';
// import { HOME, EVENTS, GAMES, ABOUT, CONTACT, FOOTER } from './BACK';
// import { Contact } from '@shared/interfaces/contact.model';
// import { About } from '@shared/interfaces/about.model';
// import { FaqItem } from '@shared/interfaces/faqitem.model';
// import { Footer } from '@shared/interfaces/footer.model';
import { Page } from '@shared/interfaces/page.model';
import { StudiosListComponent } from '@feat/studios-feat/components/studios-list/studios-list.component';
import { GamesComponent } from '@feat/home-feat/components/games/games.component';
import { EventsListComponent } from '@feat/home-feat/components/events-list/events-list.component';
import { SponsorsComponent } from '@feat/home-feat/components/sponsors/sponsors.component';
import { NewsComponent } from '@feat/home-feat/components/news/news.component';
import { MentorsComponent } from '@feat/home-feat/components/mentors/mentors.component';
import { ServicesComponent } from '@feat/home-feat/components/services/services.component';
import { FaqsComponent } from '@feat/home-feat/components/faqs/faqs.component';
import { NavBarInformation, FooterInformation } from '@shared/interfaces/contact-information.model';
// import { SearchComponent } from '@shared/components/search/search.component';
// import { Vinculate } from '@shared/interfaces/vinculate.model';
// import { stringify } from 'querystring';
import { CoursesComponent } from '@feat/home-feat/components/courses/courses.component';
import { New } from '@shared/interfaces/new.model';
import { DataComponent } from '@shared/interfaces/data-component.model';
import { Service } from '@app/shared/interfaces/service.model';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private urlRouter = `${environment.apiUrl}/app_routers`;
  private urlPages = `${environment.apiUrl}/pages`;
  private urlInformation = `${environment.apiUrl}/contact_informations`;
  // private urlSections = `${environment.apiUrl}/texts`;
  // private urlCarousel = `${environment.apiUrl}/carousels`;
  // private urlTestimonios = `${environment.apiUrl}/testimonies`;

  private currentRouterSubject: BehaviorSubject<AppRouter>;
  private currentNavBarSubject: BehaviorSubject<NavBarInformation>;
  private currentFooterSubject: BehaviorSubject<FooterInformation>;

  private meetUpGroup = 'Swifticious';
  events$: Observable<Event[]>;

  private infiniteGames$: Observable<any>;
  games$: Observable<Game[]>;

  constructor(private http: HttpClient) {
    this.currentRouterSubject = new BehaviorSubject<AppRouter>(null);
    this.currentNavBarSubject = new BehaviorSubject<NavBarInformation>(null);
    this.currentFooterSubject = new BehaviorSubject<FooterInformation>(null);
    this.infiniteGames$ = new Subject<void>().asObservable();
    // this.games$ = merge(
    //   of(GAMES).pipe(
    //     tap(() => console.log('***SIDE EFFECT***'))
    //   )
    //   // this
    //   //   .http
    //   //   .get<Game[]>('some-url')
    //   // first share, in the example it's been written before using the merge and infiniteStream$
    //   // .pipe(share())
    //   ,
    //   this.infiniteGames$
    // ).pipe(shareReplay(1));
  }

  // public get currentRouterValue(): AppRouter {
  //   return this.currentRouterSubject.value;
  // }

  getRouter() {
    const router = this.currentRouterSubject.value;
    if (router) {
      return of(router);
    } else {
      // console.log('SIDE EFECT');
      return this.http.get<AppRouter>(this.urlRouter).pipe(
        tap(r => this.currentRouterSubject.next(r))
      );
    }
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
          case ResourceType.NEW:
            component.component = NewsComponent;
            break;
          case ResourceType.MENTOR:
            component.component = MentorsComponent;
            break;
          case ResourceType.FAQ:
            component.component = FaqsComponent;
            break;
          case ResourceType.SERVICE:
            component.component = ServicesComponent;
            break;
          case ResourceType.COURSE:
            component.component = CoursesComponent;
            break;
          case ResourceType.GAME:
            component.component = GamesComponent;
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
          // case ComponentType.SEARCH: {
          //   component.component = SearchComponent;
          //   break;
          // }
          // case ComponentType.REGISTER_FORM : {
          //   component.component = RegisterFormComponent;
          //   break;
          // }
          // case 'GamesComponent': {
          //   component.component = GamesComponent;
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

  getNavBar() {
    const navbar: NavBarInformation = this.currentNavBarSubject.value;
    if (navbar) {
      return of(navbar);
    } else {
      const params = new HttpParams().set('type', 'appbar');
      return this.http.get<NavBarInformation>(`${this.urlInformation}/website`, { params }).pipe(
        tap(n => this.currentNavBarSubject.next(n))
      );
    }
  }

  getFooter() {
    const footer: FooterInformation = this.currentFooterSubject.value;
    if (footer) {
      return of(footer);
    } else {
      const params = new HttpParams().set('type', 'footer');
      return this.http.get<FooterInformation>(`${this.urlInformation}/website`, { params }).pipe(
        tap(f => this.currentFooterSubject.next(f))
      );
    }
  }

  getEvents() {
    return this.http.get<Event[]>(`${environment.apiUrl}/events`);
  }

  getNews() {
    return this.http.get<New[]>(`${environment.apiUrl}/news`);
  }

  getNew(id: string) {
    return this.http.get<New>(`${environment.apiUrl}/news/${id}`);
  }

  getServices() {
    return this.http.get<Service[]>(`${environment.apiUrl}/services`);
  }

  search(resourceType: string, search: string, filter: string, newest: string, studio?: number) {
    let params = new HttpParams().set('resource_type', resourceType);
    if (search) {
      params = params.set('search', search);
    }
    if (filter) {
      params = params.set('filters', filter);
    }
    params = params.set('newest', newest);
    if (studio) {
      params = params.set('parent_resource_id', String(studio));
    }
    return this.http.get<DataComponent[]>(`${environment.apiUrl}/searches`, { params }).pipe(
      map((data: any) => {
        if (data.length) {
          return data;
        } else {
          return [];
        }
      })
    );
  }

  getTags(resourceType: string) {
    const params = new HttpParams().set('resource_type', resourceType);
    return this.http.get<string[]>(`${environment.apiUrl}/searches/attributes/tags`, { params });
  }

  toString(tags: string[]): string {
    let tag = '';
    for (let i = 0; i < tags.length; i++) {
      const element = tags[i];
      if (i < tags.length - 1) {
        tag += element + ',';
      } else {
        tag += element;
      }
    }
    return tag;
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
