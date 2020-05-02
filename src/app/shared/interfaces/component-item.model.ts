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
  resource_type?: string;
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
  TESTIMONIOS = 'TestimonyComponent',
  SPONSORS = 'SponsorsComponent',
  NEWS = 'NewsComponent',
  MENTORS = 'MentorsComponent'
}

export enum ResourceType {
  EVENT = 'Event',
  SECTION = 'Text',
  GAME = 'Game',
  STUDIO = 'Studio',
  SPONSOR = 'Sponsor',
  NEWITEM = 'NewItem',
  MENTOR = 'Mentor'
}
