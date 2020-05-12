import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ItemDirective } from '@shared/directives/item.directive';
import { ContentService } from '@core/services/content.service';
import { ComponentItem } from '@shared/interfaces/component-item.model';
import { DataItem } from '@shared/interfaces/data-item.model';
import { Page } from '@shared/interfaces/page.model';
import { AppRouter } from '@app/shared/interfaces/router.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  components: ComponentItem[];
  error: boolean;

  @ViewChild(ItemDirective, {static: true}) itemHost: ItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getRouter().subscribe(
      (r: AppRouter) => {
        this.getFaqPage(`${r.faq_id}`);
      },
      (err) => {
        this.error = true;
        console.log('Err get faq id = ' + err);
      }
    );
  }

  getFaqPage(pageId: string) {
    this.contentService.getPage(pageId)
    .subscribe(
      (eventsPage: Page) => {
        this.components = eventsPage.components;
        this.loadComponents();
      },
      (err) => {
        // console.log('Err getFaqPage = ' + err);
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
