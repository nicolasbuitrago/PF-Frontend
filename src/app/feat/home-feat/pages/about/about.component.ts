import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ItemDirective } from '@shared/directives/item.directive';
import { ContentService } from '@core/services/content.service';
import { ComponentItem, ComponentType } from '@shared/interfaces/component-item.model';
import { DataItem } from '@shared/interfaces/data-item.model';
import { Page } from '@shared/interfaces/page.model';
import { DataComponent } from '@shared/interfaces/data-component.model';
import { Section } from '@app/shared/interfaces/section.model';
import { SectionComponent } from '../../components/section/section.component';
import { AppRouter } from '@app/shared/interfaces/router.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  components: ComponentItem[];
  headerImage: string;
  error: boolean;

  @ViewChild(ItemDirective, {static: true}) itemHost: ItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getRouter().subscribe(
      (r: AppRouter) => {
        this.getAboutPage(`${r.about_us_id}`);
      },
      (err) => {
        this.error = true;
        console.log('Err get about id = ' + err);
      }
    );
  }

  getAboutPage(pageId: string) {
    this.contentService.getPage(pageId)
    .subscribe(
      (aboutPage: Page) => {
        this.headerImage = aboutPage.header_image;
        this.components = aboutPage.components;
        this.loadComponents();
      },
      (err) => {
        // console.log('Err getAboutPage = ' + err);
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
