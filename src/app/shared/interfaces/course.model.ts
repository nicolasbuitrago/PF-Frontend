import { DataComponent } from './data-component.model';

export interface Course extends DataComponent {
  id: number;
  title: string;
  author: string;
  date: Date;
  description: string;
  image_url: string;
  link: string;
  created_at: Date;
  updated_at: Date;
}
