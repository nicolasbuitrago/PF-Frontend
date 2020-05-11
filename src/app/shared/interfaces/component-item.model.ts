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
  SECTION = 'Text',
  // GAME = 'GameComponent',
  // STUDIO = 'StudioComponent',
  CAROUSEL = 'Carousel',
  TESTIMONIOS = 'Testimony',
  CONTACT_INFORMATION = 'ContactInformation',
  SEARCH = 'Search',
  REGISTER_FORM = 'RegisterForm'
  // SPONSORS = 'SponsorsComponent',
  // NEWS = 'NewsComponent',
  // MENTORS = 'MentorsComponent',
  // SERVICES = 'ServicesComponent',
  // FAQ = 'FaqComponent'
}

export enum ResourceType {
  EVENT = 'Event',
  SECTION = 'Text',
  GAME = 'Game',
  STUDIO = 'Studio',
  SPONSOR = 'Sponsor',
  NEWITEM = 'New',
  MENTOR = 'Mentor',
  SERVICE = 'Service',
  FAQITEM = 'Faq'
}
