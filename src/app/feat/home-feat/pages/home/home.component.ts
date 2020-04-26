import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { ItemDirective } from '@shared/directives/item.directive';

import { ContentService } from '@core/services/content.service';
// import { CarouselItem } from '../../models/carousel-item.model';
// import { Testimonio } from '../../models/testimonio.model';
import { ComponentItem } from '@shared/interfaces/component-item.model';
import { DataItem } from '../../models/data-item.model';
import { Page } from '@shared/interfaces/page.model';
import { DataComponent } from '@app/shared/interfaces/data-component.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  components: ComponentItem[];

  @ViewChild(ItemDirective, {static: true}) itemHost: ItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private contentService: ContentService) { }

  ngOnInit(): void {
    this.getHome();
  }

  getHome(): void {
    this.contentService.getMainPage()
    .subscribe((home: Page) => {
      this.components = home.components;
      this.loadComponents();
    });
  }

  loadComponents(): void {
    const viewContainerRef = this.itemHost.viewContainerRef;
    for (const item of this.components) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as DataItem).data = item.data;
    }
  }

}
