import { DataComponent } from './data-component.model';
import { Type } from '@angular/core';

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
  RESOURCE = 'ResourceComponent',
  SECTION = 'Text',
  // GAME = 'Game',
  // STUDIO = 'Studio',
  CAROUSEL = 'Carousel',
  TESTIMONIOS = 'Testimony',
  CONTACT_INFORMATION = 'ContactInformation'
}

export enum ResourceType {
  EVENT = 'Event',
  NEW = 'New',
  SECTION = 'Text',
  GAME = 'Game',
  STUDIO = 'Studio',
  SPONSOR = 'Sponsor',
  MENTOR = 'Mentor',
  FAQ = 'Faq',
  SERVICE = 'Service',
  COURSE = 'Course'
}
