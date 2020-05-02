import { DataComponent } from './data-component.model';

export interface Mentor extends DataComponent {
  id: number;
  name: string;
  rol: string;
  image_url: string;
  information: string; /* Reemplazar por redes sociales */
  created_at: Date;
  updated_at: Date;
}