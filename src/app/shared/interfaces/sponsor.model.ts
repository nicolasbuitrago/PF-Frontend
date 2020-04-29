import { DataComponent } from './data-component.model';

export interface Sponsor extends DataComponent {
  id: number;
  name: string;
  link: string;
  image_url: string;
  created_at: Date;
  updated_at: Date;
}
