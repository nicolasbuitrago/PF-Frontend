import { CarouselItem } from '../models/carousel-item.model';
import { Game } from '@shared/interfaces/game.model';
import { Testimonio } from '../models/testimonio.model';
// import { ComponentItem } from '../models/component-item.model';
import { Event } from '../models/event.model';

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

export const HOME: any[] = [
  {
    component: 'CarouselComponent',
    data: ITEMS
  },
  {
    component: 'SectionComponent',
    data: {
      title: 'Lorem ipsum!!!',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique natus totam suscipit, ratione assumenda sequi velit',
      link: '#',
      img: 'https://source.unsplash.com/600x600/?work,office'
    }
  },
  {
    component: 'SectionImgBgComponent',
    data: {
      title: 'Comunícate con nosotros!!',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores distinctio autem nostrum officia sequi facere obcaecati error odio rerum quos inventore tenetur odit adipisci fuga, doloribus alias? Debitis, doloribus eos!.',
      img: 'https://unsplash.imgix.net/photo-1416339442236-8ceb164046f8?q=75&fm=jpg&s=8eb83df8a744544977722717b1ea4d09',
      link: '#'
    }
  },
  {
    component: 'TestimoniosComponent',
    data: TESTIMONIOS
  },
  {
    component: 'GamesComponent',
    data: ''
  },
  {
    component: 'SectionComponent',
    data: {
      title: 'Lorem ipsum!!!',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique natus totam suscipit, ratione assumenda sequi velit',
      link: '#',
      img: 'https://source.unsplash.com/600x600/?friend,fun',
      left: true
    }
  }
];

export const EVENTS: Event[] = [
  {
    title: 'Event 1',
    description: 'Estupendo evento 1',
    date: new Date('2020-03-01'),
    place: 'Uninorte, Barranquilla'
  },
  {
    title: 'Event 2',
    description: 'Estupendo evento 2',
    date: new Date('2020-03-05'),
    place: 'Puerta de oro, Barranquilla'
  },
  {
    title: 'Event 3',
    description: 'Estupendo evento 3',
    date: new Date('2020-03-10'),
    place: 'Combarranquilla, Barranquilla'
  },
  {
    title: 'Event 4',
    description: 'Estupendo evento 4',
    date: new Date('2020-03-20'),
    place: 'Puerta de Oro, Barranquilla'
  },
  {
    title: 'Event 5',
    description: 'Estupendo evento 5',
    date: new Date('2020-03-30'),
    place: 'Combarranquilla, Barranquilla'
  }
];

export const GAMES: Game[] = [
  {
    id: 0,
    img: 'https://source.unsplash.com/350x350/?mario,bros',
    name: 'Mario bros',
    description: 'Super game with mario',
    tags: ['video', 'game'],
    studio: 0,
    type: 'Arcade',
    link: '#',
    video: '#',
  },
  {
    id: 1,
    img: 'https://source.unsplash.com/350x350/?soccer',
    name: 'PES 2020',
    description: 'Soccer game',
    tags: ['video', 'game'],
    studio: 2,
    type: 'Sports',
    link: '#',
    video: '#',
  },
  {
    id: 2,
    img: 'https://source.unsplash.com/350x350/?race',
    name: 'Mario Kars',
    description: 'Super game with mario and cars',
    tags: ['video', 'game'],
    studio: 0,
    type: 'Race',
    link: '#',
    video: '#',
  },
  {
    id: 3,
    img: 'https://source.unsplash.com/350x350/?militar',
    name: 'COD',
    description: 'Militar FPS',
    tags: ['video', 'game'],
    studio: 3,
    type: 'FPS',
    link: '#',
    video: '#',
  },
  {
    id: 0,
    img: 'https://source.unsplash.com/350x350/?mario,bros',
    name: 'Mario bros',
    description: 'Super game with mario',
    tags: ['video', 'game'],
    studio: 0,
    type: 'Arcade',
    link: '#',
    video: '#',
  },
  {
    id: 1,
    img: 'https://source.unsplash.com/350x350/?soccer',
    name: 'PES 2020',
    description: 'Soccer game',
    tags: ['video', 'game'],
    studio: 2,
    type: 'Sports',
    link: '#',
    video: '#',
  },
  {
    id: 2,
    img: 'https://source.unsplash.com/350x350/?race',
    name: 'Mario Karts',
    description: 'Super game with mario and cars',
    tags: ['video', 'game'],
    studio: 0,
    type: 'Race',
    link: '#',
    video: '#',
  },
  {
    id: 3,
    img: 'https://source.unsplash.com/350x350/?militar',
    name: 'COD',
    description: 'Militar FPS',
    tags: ['video', 'game'],
    studio: 3,
    type: 'FPS',
    link: '#',
    video: '#',
  },
  {
    id: 5,
    img: 'https://source.unsplash.com/350x350/?war',
    name: 'WAR',
    description: 'Militar WAR',
    tags: ['video', 'game'],
    studio: 3,
    type: 'WAR',
    link: '#',
    video: '#',
  }
];

