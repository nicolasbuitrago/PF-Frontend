import { DataComponent } from './data-component.model';
import { Game } from './game.model';

export interface Studio extends DataComponent {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  link: string;
  tags?: string[];
  image_url: string;
  games?: Game[];
  created_at: Date;
  updated_at: Date;
  latitude?: string;
  longitude?: string;
}

