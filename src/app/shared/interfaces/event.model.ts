import { DataComponent } from './data-component.model';

export interface Event extends DataComponent {
  id: number;
  name: string;
  description: string;
  date: Date;
  address: string;
  image_url: string;
  // latitude: number;
  // longitude: number;
  created_at: Date;
  updated_at: Date;
}
