import { CarouselItem } from '../models/carousel-item.model';
import { Game } from '../models/game.model';
import { Studio } from '../models/studio.model';
import { Testimonio } from '../models/testimonio.model';
import { ComponentItem } from '../models/component-item.model';

const ITEMS: CarouselItem[] = [
  {
    title: 'Carousel item 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus omnis sequi pariatur?',
    img: 'https://source.unsplash.com/1550x611/?video,game',
    link: '#'
  },
  {
    title: 'Carousel item 2',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis minus dicta consequuntur quae temporibus totam impedit corporis laudantium quas eum fugit, fugiat, aliquid ipsa qui tempora.',
    img: 'https://source.unsplash.com/1550x611/?tech,games',
    link: '#'
  },
  {
    title: 'Carousel item 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus omnis sequi pariatur',
    img: 'https://source.unsplash.com/1550x611/?videogame',
    link: '#'
  }
];

const TESTIMONIOS: Testimonio[] = [
  {
    mesg: 'Es asombroso',
    img: '//placeimg.com/200/200/people',
    author: 'Carlos Perez',
    authorInfo: 'Director of Tuna Games'
  },
  {
    mesg: 'Fantastico',
    img: '//placeimg.com/200/200/people',
    author: 'Lucas Ramirez',
    authorInfo: 'Art Designer of Caribbean Games'
  },
  {
    mesg: 'Una maravilla',
    img: '//placeimg.com/200/200/people',
    author: 'Mario Diaz',
    authorInfo: 'Sub-Director of Caption Games'
  }
];

export const GAMES: Game[] = [
  {
    id: 0,
    name: 'Mario bros',
    description: 'Super game with mario',
    studio: 0,
    type: 'Arcade'
  },
  {
    id: 1,
    name: 'PES 2020',
    description: 'Soccer game',
    studio: 2,
    type: 'Sports'
  },
  {
    id: 2,
    name: 'Mario Kars',
    description: 'Super game with mario and cars',
    studio: 0,
    type: 'Race'
  },
  {
    id: 3,
    name: 'COD',
    description: 'Militar FPS',
    studio: 3,
    type: 'FPS'
  },
  {
    id: 0,
    name: 'Mario bros',
    description: 'Super game with mario',
    studio: 0,
    type: 'Arcade'
  },
  {
    id: 1,
    name: 'PES 2020',
    description: 'Soccer game',
    studio: 2,
    type: 'Sports'
  },
  {
    id: 2,
    name: 'Mario Karts',
    description: 'Super game with mario and cars',
    studio: 0,
    type: 'Race'
  },
  {
    id: 3,
    name: 'COD',
    description: 'Militar FPS',
    studio: 3,
    type: 'FPS'
  },
  {
    id: 5,
    name: 'WAR',
    description: 'Militar WAR',
    studio: 3,
    type: 'WAR'
  }
];

export const HOME: any[] = [
  {
    component: 'CarouselComponent',
    data: ITEMS
  },
  {
    component: 'SectionComponent',
    data: {
      title: 'Lorem ipsum!!!',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique natus totam suscipit, ratione assumenda sequi velit'
    }
  },
  {
    component: 'TestimoniosComponent',
    data: TESTIMONIOS
  },
  {
    component: 'GamesComponent',
    data: ''
  }
];

export const STUDIOS: Studio[] = [
  {
    id: 0,
    name: 'Studio 1',
    type: 'Video games',
    description: 'Somos el estudio 1',
    ubication: 'Barranquilla'
  },
  {
    id: 1,
    name: 'Studio 2',
    type: 'Art design',
    description: 'Somos el estudio 2',
    ubication: 'Cartagena'
  },
  {
    id: 2,
    name: 'Studio 3',
    type: 'Visual recognition',
    description: 'Somos el estudio 3',
    ubication: 'Barranquilla'
  },
  {
    id: 3,
    name: 'Studio 4',
    type: 'Video games',
    description: 'Somos el estudio 4',
    ubication: 'Santa Marta'
  },
  {
    id: 3,
    name: 'Studio 5',
    type: 'Video games',
    description: 'Somos el estudio 5',
    ubication: 'Barranquilla'
  }
];
