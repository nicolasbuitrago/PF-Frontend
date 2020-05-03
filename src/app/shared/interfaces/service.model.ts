import { DataComponent } from './data-component.model';

export interface Service extends DataComponent {
  id: number;
  title: string;
  link: string;
  icon: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}
