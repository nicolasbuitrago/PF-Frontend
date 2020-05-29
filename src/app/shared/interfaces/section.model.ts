import { DataComponent } from './data-component.model';

export interface Section extends DataComponent {
  id: number;
  title: string;
  description: string;
  link: string;
  image_url: string;
  background_image: boolean;
  image_left: boolean;
  full_width: boolean;
  created_at: Date;
  updated_at: Date;
}
