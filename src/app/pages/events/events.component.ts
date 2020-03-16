import { Component, OnInit } from '@angular/core';

import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app//models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  today: Date;
  minDate: Date;
  maxDate: Date;
  events: Event[];

  constructor(private eventService: EventService) {
    this.today = new Date();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 30);
    this.maxDate.setDate(this.maxDate.getDate() + 30);
    this.getEvents();
   }

  ngOnInit(): void {
  }

  getEvents(): void {
    this.eventService.getServices()
    .subscribe(events => this.events = events);
  }
}
