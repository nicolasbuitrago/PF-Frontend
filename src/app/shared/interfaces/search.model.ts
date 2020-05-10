import { ComponentItem } from './component-item.model';

export interface Search extends ComponentItem {
    id: number;
    word: string;
    order1: string;
    order2: string;
    created_at: Date;
    updated_at: Date;
  }

