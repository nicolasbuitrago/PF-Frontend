import { Component, OnInit } from '@angular/core';
import { ContentService } from '@core/services/content.service';
import { Event } from '@shared/interfaces/event.model';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {

  events: Event[];
  // selectedEvents: Event[];
  error: boolean;
  // counter = 12;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.contentService.getEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
      },
      (err) => {
        this.error = true;
        console.log(err);
      }
    );
  }

}
