import { DataComponent } from './data-component.model';

export interface Mentor extends DataComponent {
  id: number;
  name: string;
  role: string;
  image_url: string;
  info: string; /* Reemplazar por redes sociales */
  created_at: Date;
  updated_at: Date;
}
