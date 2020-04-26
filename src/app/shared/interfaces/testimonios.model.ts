import { DataComponent } from './data-component.model';

export interface Testimonios extends DataComponent {
  id: number;
  name: string;
  items: TestimonioItem[];
  created_at: Date;
  updated_at: Date;
}

export interface TestimonioItem {
  id: number;
  position: number;
  title: string;
  text: string;
  author_name: string;
  author_info: string;
  link: string;
  testimony_id: number;
  image_url: string;
  created_at: Date;
  updated_at: Date;
}
