import { CarouselItem } from '@shared/interfaces/carousel-item.model';
import { Game } from '@shared/interfaces/game.model';
import { Testimonio } from '@shared/interfaces/testimonio.model';
// import { ComponentItem } from '@shared/interfaces/component-item.model';
import { Event } from '@shared/interfaces/event.model';
import { About } from '@shared/interfaces/about.model';
import { Contact } from '@shared/interfaces/contact.model';
import { Footer } from '@app/shared/interfaces/footer.model';

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
    mesg: 'Amazing',
    img: '//placeimg.com/200/200/people',
    author: 'Carlos Perez',
    authorInfo: 'Director of Tuna Games'
  },
  {
    mesg: 'The best experience',
    img: '//placeimg.com/200/200/people',
    author: 'Lucas Ramirez',
    authorInfo: 'Art Designer of Caribbean Games'
  },
  {
    mesg: 'Wonderfull',
    img: '//placeimg.com/200/200/people',
    author: 'Mario Diaz',
    authorInfo: 'Sub-Director of Caption Games'
  }
];

export const EVENTS: Event[] = [
  {
    title: 'Event 1',
    description: 'Workshop',
    date: new Date('2020-05-01'),
    place: 'Uninorte, Barranquilla'
  },
  {
    title: 'Event 2',
    description: 'Hackathon',
    date: new Date('2020-05-05'),
    place: 'Puerta de oro, Barranquilla'
  },
  {
    title: 'Event 3',
    description: 'Bootcamp',
    date: new Date('2020-05-10'),
    place: 'Combarranquilla, Barranquilla'
  },
  {
    title: 'Event 4',
    description: 'Hackathon Uninorte',
    date: new Date('2020-04-20'),
    place: 'Puerta de Oro, Barranquilla'
  },
  {
    title: 'Event 5',
    description: 'Workshop on innovation',
    date: new Date('2020-04-30'),
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

export const HOME: any[] = [
  {
    component: 'CarouselComponent',
    data: ITEMS
  },
  {
    component: 'SectionComponent',
    data: {
      title: 'Who We Are',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique natus totam suscipit, ratione assumenda sequi velit',
      link: '#',
      img: 'https://source.unsplash.com/600x600/?work,office'
    }
  },
  {
    component: 'SectionImgBgComponent',
    data: {
      title: 'Our services',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores distinctio autem nostrum officia sequi facere obcaecati error odio rerum quos inventore tenetur odit adipisci fuga, doloribus alias? Debitis, doloribus eos!.',
      img: 'https://unsplash.imgix.net/photo-1416339442236-8ceb164046f8?q=75&fm=jpg&s=8eb83df8a744544977722717b1ea4d09',
      link: '#'
    }
  },
  {
    component: 'GamesComponent',
    data: {
      games: GAMES
    }
  },
  {
    component: 'TestimoniosComponent',
    data: TESTIMONIOS
  }/* ,
  {
    component: 'SectionComponent',
    data: {
      title: 'Join the IT revolution',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique natus totam suscipit, ratione assumenda sequi velit',
      link: '#',
      img: 'https://source.unsplash.com/600x600/?friend,fun',
      left: true
    }
  } */
];


export const CONTACT: Contact = {
  address: 'Kra 54 # 68 - 169',
  city: 'Barranquilla, Atlantico',
  phone1: '355-555-555',
  phone2: '355-555-555',
  email1: 'info@example1.com',
  email2: 'info@example2.com',
  embedMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.549625813364!2d-74.80119848577134!3d10.997327492171836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d75c8893ef5%3A0x12a761c8d4a0fc34!2sCra.%2054%20%2368-169%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1584553999709!5m2!1ses!2sco'
};

export const ABOUT: About = {
  mision: {
    img: 'https://source.unsplash.com/1550x611/?videogame,company',
    first: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    calendar: {
      title: 'Lorem ipsum',
      text: 'Lorem ipolor sit amet, no sea takimata sanctus est Loremsum dolor sit amet, adipisicing elit.'
    },
    plot: {
      title: 'Lorem ipolor sit amet',
      text: 'Lorem ipsum dolorsita.Lorem ipsum dolor sit amet,sed diam nonumy eirmod tempor invidunt ut labore et dolore\
        magna aliquyam erat, At vero eos et accusam et justo duo dolores et earebum. Lorem ipsum dolor sit amet,\
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren.'
    }
  },
  vision: {
    img: 'https://source.unsplash.com/1550x611/?videogame,work',
    first: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    calendar: {
      title: 'Lorem ipsum',
      text: 'Lorem ipolor sit amet, no sea takimata sanctus est Loremsum dolor sit amet, adipisicing elit.'
    },
    plot: {
      title: 'Lorem ipolor sit amet',
      text: 'Lorem ipsum dolorsita.Lorem ipsum dolor sit amet,sed diam nonumy eirmod tempor invidunt ut labore et dolore\
        magna aliquyam erat, At vero eos et accusam et justo duo dolores et earebum. Lorem ipsum dolor sit amet,\
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren.'
    }
  }
};

export const FOOTER: Footer = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  links: {
    facebook: '#facebbok',
    twitter: '#twitter',
    linkedin: '#linkedin',
    instagram: '#instagram'
  },
  address: 'Kra 54 # 68 - 169',
  phone: 'info@example.com',
  email: '355-555-555',
  web: 'pf-videogames.netlify.com'
};
