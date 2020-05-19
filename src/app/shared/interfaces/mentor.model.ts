import { DataComponent } from './data-component.model';
import { ContactInformation } from './contact-information.model';

export interface Mentor extends DataComponent {
  id: number;
  name: string;
  role: string;
  image_url: string;
  info: string; /* Reemplazar por redes sociales */
  contact_information: ContactInformation;
  created_at: Date;
  updated_at: Date;
}
