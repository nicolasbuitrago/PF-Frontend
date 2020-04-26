import { Type } from '@angular/core';

export class ComponentItem {
  constructor(public component: Type<any>, public data: any) {}
}

export enum ComponentType {
  RESOURCE_LIST = 'ResourceListComponent',
  SECTION = 'TextComponent',
  GAME = 'GameComponent',
  STUDIO = 'StudioComponent',
  CAROUSEL = 'CarouselComponent',
  TESTIMONIOS = 'TestimoniosComponent'
}
