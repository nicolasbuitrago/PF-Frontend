import { DataComponent } from './data-component.model';

export interface Courses extends DataComponent {
  id: number;
  title: string;
  date: Date;
  description: string;
  image_url: string;
  author: string;
  url: string; /* url register */
  created_at: Date;
  updated_at: Date;
}
