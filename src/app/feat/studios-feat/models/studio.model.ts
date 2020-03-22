import { Game } from '@shared/interfaces/game.model';

export interface Studio {
  id: number;
  img: string;
  name: string;
  type: string;
  description: string;
  tags: string[];
  link: string;
  address: string;
  city: string;
  ubication: {
    lat: string,
    lon: string
  };
  games: Game[];
}
