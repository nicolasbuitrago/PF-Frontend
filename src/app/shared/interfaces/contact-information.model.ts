import { ComponentItem } from './component-item.model';

export interface ContactInformation extends ComponentItem {
  id: number;
  name: string;
  text: string;
  map_url: string;
  image_url: string;
  website: boolean;
  social_networks: string[];
  addresses: string[];
  phones: string[];
  emails: string[];
  links: string[];
  created_at: Date;
  updated_at: Date;
}

export interface AppBarInformation {
  name: string;
  image_url: string;
}

export interface FooterInformation {
  name: string;
  text: string;
  social_networks: string[];
  address: string;
  email: string;
  phone: string;
}
