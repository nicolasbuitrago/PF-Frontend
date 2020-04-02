import { Component, OnInit } from '@angular/core';
import { DatepickerDateCustomClasses } from 'ngx-bootstrap/datepicker';

import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  selectedDate: Date;
  today: Date;
  minDate: Date;
  maxDate: Date;
  events: Event[];
  selectedEvents: Event[];
  dateCustomClasses: DatepickerDateCustomClasses[];

  constructor(private eventService: EventService, private contentService: ContentService) {
    this.selectedDate = new Date();
    this.today = new Date();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 30);
    this.maxDate.setDate(this.maxDate.getDate() + 30);
    this.dateCustomClasses = [
      { date: this.today, classes: ['bg-primary', 'text-white'] }
    ];
    this.getEvents();
   }

  ngOnInit(): void {
  }

  getEvents(): void {
    this.eventService.getServices()
    .subscribe((events) => {
      this.events = events;
      this.selectedEvents = [];
      for (const event of events) {
        this.dateCustomClasses.push({ date: event.date, classes: ['bg-secondary', 'text-white']});
        this.selectedEvents.push(event);
      }
    });
  }

  result: string = 'R = ';
  getEventsShare(): void {
    this.contentService.getEvents().subscribe(events => {
      this.result += events.length + ' ';
    });
  }

  onDateChange(value: Date): void {
    this.selectedDate = value;
    this.selectedEvents = [];
    // console.log('Date changed ' + value.getDay());
    for (const event of this.events) {
      // console.log(event.date.getTime() + ' === ' + this.selectedDate.getTime());
      if (this.equalDate(event.date, value)) {
        // console.log('Event added ' + event.title);
        this.selectedEvents.push(event);
      }
    }
  }

  equalDate(DateA: Date, DateB: Date): boolean {     // this function is good for dates > 01/01/1970
    const a = new Date(DateA);
    const b = new Date(DateB);
    const msDateA = Date.UTC(a.getFullYear(), a.getMonth() + 1, a.getDate());
    const msDateB = Date.UTC(b.getFullYear(), b.getMonth() + 1, b.getDate());
    // console.log(msDateA + ' === ' + msDateB);
    return msDateA === msDateB;
}
}
