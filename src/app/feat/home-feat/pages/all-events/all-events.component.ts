import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/public_api';
import { ContentService } from '@core/services/content.service';
import { Event } from '@shared/interfaces/event.model';
import { ResourceType } from '@shared/interfaces/component-item.model';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {

  resources: Event[];
  events: Event[];
  selectedEvents: Event[];
  error: boolean;
  itemsPerPage = 3;
  resourceType: string;
  viewResult: boolean;

  constructor(private contentService: ContentService) {
    this.resourceType = ResourceType.EVENT;
  }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.contentService.getEvents().subscribe(
      (events: Event[]) => {
        this.resources = events;
        this.events = events;
        this.selectedEvents = events.slice(0, this.itemsPerPage);
      },
      (err) => {
        this.error = true;
        console.log(err);
      }
    );
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.selectedEvents = this.events.slice(startItem, endItem);
  }

  searchResult(data) {
    this.viewResult = true;
    this.events = data as Event[];
    this.selectedEvents = this.events.slice(0, this.itemsPerPage);
  }

  clear() {
    this.viewResult = false;
    this.events = this.resources;
    this.selectedEvents = this.resources.slice(0, this.itemsPerPage);
  }

}
