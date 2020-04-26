import { DataComponent } from './data-component.model';

export interface Carousel extends DataComponent {
  id: number;
  name: string;
  items: CarouselItem[];
  created_at: Date;
  updated_at: Date;
}

export interface CarouselItem {
  id: number;
  position: number;
  title: string;
  text: string;
  link: string;
  carousel_id: number;
  image_url: string;
  created_at: Date;
  updated_at: Date;
}
