import { DataComponent } from './data-component.model';
import { ContactInformation } from './contact-information.model';
import { User } from './user.model';

export interface New extends DataComponent {
  id: number;
  title: string;
  description: string;
  full_text: string;
  date: Date;
  user: User;
  contact_information: ContactInformation;
  image_url: string;
  link: string;
  created_at: Date;
  updated_at: Date;
}
