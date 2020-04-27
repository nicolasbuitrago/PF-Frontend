import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Studio } from '@shared/interfaces/studio.model';
// import { STUDIOS } from './BACK';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  private url = `${environment.apiUrl}/studios`;
  private currentStudiosSubject: BehaviorSubject<Studio[]>;
  private studioSubject: BehaviorSubject<Studio>;

  constructor(private http: HttpClient) {
    this.currentStudiosSubject = new BehaviorSubject<Studio[]>([]);
    this.studioSubject = new BehaviorSubject<Studio>(undefined);
  }

  public get currentStudiosValue(): Studio[] {
    return this.currentStudiosSubject.value;
  }

  public get currentStudioValue(): Studio {
    return this.studioSubject.value;
  }

  getStudios() {
    return this.http.get<Studio[]>(this.url).pipe(
      tap(studios => this.currentStudiosSubject.next(studios))
    );
  }

  getStudio(id: string) {
    return this.http.get<Studio>(`${this.url}/${id}`).pipe(
      // delay(10000),
      tap(studio => this.studioSubject.next(studio))
    );
    // return of(STUDIO).pipe(
    //   tap(studio => this.studioSubject.next(studio))
    // );
  }
}
