import { DataComponent } from './data-component.model';
import { Game } from './game.model';

export interface Studio extends DataComponent {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  link: string;
  tags?: string[];
  image_url?: string;
  games?: Game[];
  created_at: Date;
  updated_at: Date;
  latitude?: string;
  longitude?: string;
}

const games: Game[] = [
  {
    id: 1,
    studio_id: 1,
    name: 'COD',
    description: 'Juego militar',
    tags: ['Militar', 'FPS'],
    link: 'cod.com',
    video: 'youtube.com/cod',
    created_at: new Date('2020-04-12'),
    updated_at: new Date('2020-04-23')
  },
  {
    id: 2,
    studio_id: 1,
    name: 'Militar 2',
    description: 'Juego militar',
    tags: ['Militar', 'FPS'],
    link: 'militar2.com',
    video: 'youtube.com/militar2',
    created_at: new Date('2020-04-12'),
    updated_at: new Date('2020-04-23')
  }
];

export const STUDIO: Studio = {
  id: 1,
  name: 'Studio 1',
  description: 'Esta es la descripción del estudio 1',
  address: 'Cra 4 # 2 - 3',
  city: 'Barranquilla',
  phone: '555-555',
  link: 'studio1.com',
  tags: ['videogames', 'studio'],
  games,
  created_at: new Date('2020-04-12'),
  updated_at: new Date('2020-04-23')
};
