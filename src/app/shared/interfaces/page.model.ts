import { ComponentItem } from './component-item.model';
export interface Page {
  id: number;
  name: string;
  main_page: boolean;
  header_image: string;
  components?: ComponentItem[];
  created_at: Date;
  updated_at: Date;
}
