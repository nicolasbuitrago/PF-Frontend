import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { ItemDirective } from '@shared/directives/item.directive';
import { ContentService } from '@core/services/content.service';
import { ComponentItem, ComponentType } from '@shared/interfaces/component-item.model';
import { DataItem } from '@shared/interfaces/data-item.model';
import { Page } from '@shared/interfaces/page.model';
import { AppRouter } from '@app/shared/interfaces/router.model';
import { New } from '@app/shared/interfaces/new.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() resources: New[];
  news: New[];
  components: ComponentItem[];
  error: boolean;

  @ViewChild(ItemDirective, {static: true}) itemHost: ItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getRouter().subscribe(
      (r: AppRouter) => {
        this.getBlogPage(`${r.blog_id}`);
      },
      (err) => {
        this.error = true;
        console.log('Err get blog id = ' + err);
      }
    );
  }

  get fixed() {
    return this.components && this.components.length && this.components[0].resource_type === ComponentType.CAROUSEL;
  }

  getBlogPage(pageId: string) {
    this.contentService.getPage(pageId)
    .subscribe(
      (blogPage: Page) => {
        this.components = blogPage.components;
        this.loadComponents();
      },
      (err) => {
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

