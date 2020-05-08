import { DataComponent } from './data-component.model';

export interface Service extends DataComponent {
  id: number;
  name: string;
  link: string;
  image_url: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}
