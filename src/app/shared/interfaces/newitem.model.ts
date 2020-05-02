import { DataComponent } from './data-component.model';

export interface NewItem extends DataComponent {
  id: number;
  title: string;
  description: string;
  date: Date;
  link: string;
  image_url: string;
  created_at: Date;
  updated_at: Date;
}
