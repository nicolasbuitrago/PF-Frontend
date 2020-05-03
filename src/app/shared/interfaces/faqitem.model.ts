import { DataComponent } from './data-component.model';

export interface FaqItem extends DataComponent {
  id: number;
  category: string;
  question: string;
  answer: string;
  created_at: Date;
  updated_at: Date;
}
