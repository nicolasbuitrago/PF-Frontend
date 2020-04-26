import { Type } from '@angular/core';
import { DataComponent } from './data-component.model';

// export class ComponentItem {
//   constructor(public component: Type<any>, public data: any) {}
// }

export interface ComponentItem {
  id: number;
  name: string;
  type: string;
  component?: Type<any>;
  page_id: number;
  component_id: number;
  data?: DataComponent; // DataComponent
  resources?: DataComponent[]; // DataComponent[]
  position: number;
  css: string;
  created_at: Date;
  updated_at: Date;
}

export enum ComponentType {
  RESOURCE_LIST = 'ResourceListComponent',
  SECTION = 'TextComponent',
  GAME = 'GameComponent',
  STUDIO = 'StudioComponent',
  CAROUSEL = 'CarouselComponent',
  TESTIMONIOS = 'TestimonyComponent'
}
