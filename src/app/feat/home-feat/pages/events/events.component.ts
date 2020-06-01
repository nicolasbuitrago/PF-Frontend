import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ItemDirective } from '@shared/directives/item.directive';
import { ContentService } from '@core/services/content.service';
import { ComponentItem } from '@shared/interfaces/component-item.model';
import { DataItem } from '@shared/interfaces/data-item.model';
import { Page } from '@shared/interfaces/page.model';
import { AppRouter } from '@app/shared/interfaces/router.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  components: ComponentItem[];
  headerImage: string;
  error: boolean;

  @ViewChild(ItemDirective, {static: true}) itemHost: ItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getRouter().subscribe(
      (r: AppRouter) => {
        this.getEventsPage(`${r.events_and_news_id}`);
      },
      (err) => {
        this.error = true;
        console.log('Err get events id = ' + err);
      }
    );
  }

  getEventsPage(pageId: string): void {
    this.contentService.getPage(pageId)
    .subscribe(
      (eventsPage: Page) => {
        if (eventsPage.header_image) {
          this.headerImage = eventsPage.header_image;
        }
        this.components = eventsPage.components;
        this.loadComponents();
      },
      (err) => {
        // console.log('Err getEventsPage = ' + err);
        this.error = true;
      }
    );
  }

  loadComponents(): void {
    const viewContainerRef = this.itemHost.viewContainerRef;
    for (const item of this.components) {
      if (item.component) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
        const componentRef = viewContainerRef.createComponent(componentFactory);
        if (item.data) {
          (componentRef.instance as DataItem).data = item.data;
        } else {
          (componentRef.instance as DataItem).resources = item.resources;
        }
      }
    }
  }

}
