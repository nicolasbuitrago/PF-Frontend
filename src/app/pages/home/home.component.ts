import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { ItemDirective } from '../../directives/item.directive';

import { HomeService } from 'src/app/services/home.service';
import { CarouselItem } from '../../models/carousel-item.model';
import { Testimonio } from '../../models/testimonio.model';
import { ComponentItem } from '../../models/component-item.model';
import { ItemComponent } from 'src/app/models/item.component.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home: ComponentItem[];

  @ViewChild(ItemDirective, {static: true}) itemHost: ItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHome();
  }

  getHome(): void {
    this.homeService.getHome()
    .subscribe((home: ComponentItem[]) => {
      this.home = home;
      this.loadComponents();
    });
  }

  loadComponents(): void {
    const viewContainerRef = this.itemHost.viewContainerRef;
    for (const item of this.home) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as ItemComponent).data = item.data;
    }
  }

}
