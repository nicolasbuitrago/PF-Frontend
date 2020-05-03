import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ItemDirective } from '@shared/directives/item.directive';
import { ContentService } from '@core/services/content.service';
import { ComponentItem } from '@shared/interfaces/component-item.model';
import { DataItem } from '@shared/interfaces/data-item.model';
import { Page } from '@shared/interfaces/page.model';
// import { StudioService } from '../../services/studio.service';
// import { Studio, STUDIO } from '@shared/interfaces/studio.model';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.scss']
})
export class StudiosComponent implements OnInit {

  components: ComponentItem[];
  // studios: Studio[];

  @ViewChild(ItemDirective, {static: true}) itemHost: ItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private contentService: ContentService) { }


  ngOnInit(): void {
    // this.studios = [];
    // this.getStudios();
    this.getStudiosPage();
  }

  getStudiosPage() {
    this.contentService.getPage('3')
    .subscribe(
      (studiosPage: Page) => {
        this.components = studiosPage.components;
        this.loadComponents();
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

  getStudios(): void {
    // this.studioService.getStudios()
    // .subscribe(studios => this.studios = studios);
    // for (let i = 0; i < 40; i++) {
    //   this.studios.push(STUDIO);
    // }
  }

}
