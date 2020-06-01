import { DataComponent } from './data-component.model';

export interface Game extends DataComponent {
  id: number;
  studio_id: number;
  name: string;
  description: string;
  tags: string[];
  image_url: string;
  link: string;
  video: string;
  created_at: Date;
  updated_at: Date;
}
