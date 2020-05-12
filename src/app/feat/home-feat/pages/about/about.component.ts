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
        this.components = aboutPage.components;
        const sections: Section[] = [
          {
            id: 1,
            name: 'section1',
            title: 'Prueba de section 1',
            text: 'Lorem ipsum no dolor en at aglius marius atlasian yaquipa turiyaqui',
            link: '#',
            image_url: 'https://source.unsplash.com/800x800/?video,game',
            bgImg: true,
            left: true,
            full_width: true,
            created_at: new Date('2020-04-05'),
            updated_at: new Date('2020-04-05'),
          },
          {
            id: 2,
            name: 'section2',
            title: 'Prueba de section 2',
            text: 'Lorem ipsum no dolor en at aglius marius atlasian yaquipa turiyaqui',
            link: '#',
            image_url: 'https://source.unsplash.com/800x800/?tech,game',
            bgImg: false,
            left: false,
            full_width: false,
            created_at: new Date('2020-04-05'),
            updated_at: new Date('2020-04-05')
          }
        ];
        const comps: ComponentItem[] = [
          {
            id: 1,
            component_id: 1,
            css: '',
            name: 'section 1',
            page_id: 1,
            position: 0,
            type: ComponentType.SECTION,
            component: SectionComponent,
            data: sections[0],
            created_at: new Date('2020-04-05'),
            updated_at: new Date('2020-04-05')
          },
          {
            id: 2,
            component_id: 2,
            css: '',
            name: 'section 2',
            page_id: 1,
            position: 0,
            type: ComponentType.SECTION,
            component: SectionComponent,
            data: sections[1],
            created_at: new Date('2020-04-05'),
            updated_at: new Date('2020-04-05')
          }
        ];
        this.components.push(...comps);
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
