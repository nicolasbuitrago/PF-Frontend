import { DataComponent } from './data-component.model';

export interface Section extends DataComponent {
  id: number;
  title: string;
  text: string;
  link: string;
  image_url: string;
  bgImg: boolean;
  left: boolean;
  created_at: Date;
  updated_at: Date;
}
