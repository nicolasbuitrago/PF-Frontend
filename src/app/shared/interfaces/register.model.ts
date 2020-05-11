import { ComponentItem } from './component-item.model';

export interface Register extends ComponentItem {
  id: number;
  name_contact: string;
  lastname_contact: string;
  phone_contact: string;
  razon_social: string;
  nit: number;
  description: string;
  city: string;
  addresses: string;
  dpto?: string;
  website: boolean;
  phone_office: string;
  logo_url: string;
  email_office: string;
  social_networks: string[];
  type_entity: string[];
  created_at: Date;
  updated_at: Date;
}


