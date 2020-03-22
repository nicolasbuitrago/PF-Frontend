import { Studio } from '../models/studio.model';

export const STUDIOS: Studio[] = [
  {
    id: 0,
    img: 'https://source.unsplash.com/500x500/?tech',
    name: 'Studio 1',
    type: 'Video games',
    description: 'Somos el estudio 1',
    tags: ['video', 'game'],
    link: '#',
    address: 'Calle 27 # 76 - 53',
    city: 'Barranquilla',
    ubication: {
      lat: '10.9799669',
      lon: '-74.8013085'
    },
    games: [
      {
        id: 0,
        img: 'https://source.unsplash.com/350x350/?mario,bros',
        name: 'Mario bros',
        description: 'Super game with mario',
        tags: ['video', 'game'],
        studio: 0,
        type: 'Arcade',
        link: '#marioLink',
        video: '#marioVideo'
      },
      {
        id: 1,
        img: 'https://source.unsplash.com/350x350/?soccer',
        name: 'PES 2020',
        description: 'Soccer game',
        tags: ['video', 'game'],
        studio: 0,
        type: 'Sports',
        link: '#',
        video: '#'
      },
      {
        id: 3,
        img: 'https://source.unsplash.com/350x350/?militar',
        name: 'COD',
        description: 'Militar FPS',
        tags: ['video', 'game'],
        studio: 0,
        type: 'FPS',
        link: '#',
        video: '#'
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
        video: '#'
      }
    ]
  },
  {
    id: 1,
    img: 'https://source.unsplash.com/500x500/?computer',
    name: 'Studio 2',
    type: 'Art design',
    description: 'Somos el estudio 2',
    tags: ['video', 'game'],
    link: '#',
    address: 'Calle 27 # 76 - 53',
    city: 'Cartagena',
    ubication: {
      lat: '10.395595',
      lon: '-75.481644'
    },
    games: [
      {
        id: 0,
        img: 'https://source.unsplash.com/350x350/?mario,bros',
        name: 'Mario bros',
        description: 'Super game with mario',
        tags: ['video', 'game'],
        studio: 1,
        type: 'Arcade',
        link: '#',
        video: '#'
      },
      {
        id: 2,
        img: 'https://source.unsplash.com/350x350/?race',
        name: 'Mario Kars',
        description: 'Super game with mario and cars',
        tags: ['video', 'game'],
        studio: 1,
        type: 'Race',
        link: '#',
        video: '#'
      }
    ]
  },
  {
    id: 2,
    img: 'https://source.unsplash.com/500x500/?videogame',
    name: 'Studio 3',
    type: 'Visual recognition',
    description: 'Somos el estudio 3',
    tags: ['video', 'game'],
    link: '#',
    address: 'Calle 27 # 76 - 53',
    city: 'Barranquilla',
    ubication: {
      lat: '11.001032',
      lon: '-74.822469'
    },
    games: [
      {
        id: 0,
        img: 'https://source.unsplash.com/350x350/?mario,bros',
        name: 'Mario bros',
        description: 'Super game with mario',
        tags: ['video', 'game'],
        studio: 2,
        type: 'Arcade',
        link: '#',
        video: '#'
      },
      {
        id: 3,
        img: 'https://source.unsplash.com/350x350/?militar',
        name: 'COD',
        description: 'Militar FPS',
        tags: ['video', 'game'],
        studio: 2,
        type: 'FPS',
        link: '#',
        video: '#'
      }
    ]
  },
  {
    id: 3,
    img: 'https://source.unsplash.com/500x500/?studio',
    name: 'Studio 4',
    type: 'Video games',
    description: 'Somos el estudio 4',
    tags: ['video', 'game'],
    link: '#',
    address: 'Calle 27 # 76 - 53',
    city: 'Santa Marta',
    ubication: {
      lat: '11.245321',
      lon: '-74.211819'
    },
    games: [
      {
        id: 3,
        img: 'https://source.unsplash.com/350x350/?militar',
        name: 'COD',
        description: 'Militar FPS',
        tags: ['video', 'game'],
        studio: 3,
        type: 'FPS',
        link: '#',
        video: '#'
      },
      {
        id: 2,
        img: 'https://source.unsplash.com/350x350/?race',
        name: 'Mario Kars',
        description: 'Super game with mario and cars',
        tags: ['video', 'game'],
        studio: 3,
        type: 'Race',
        link: '#',
        video: '#'
      }
    ]
  },
  {
    id: 4,
    img: 'https://source.unsplash.com/500x500/?dog',
    name: 'Studio 5',
    type: 'Video games',
    description: 'Somos el estudio 5',
    tags: ['video', 'game'],
    link: '#',
    address: 'Calle 27 # 76 - 53',
    city: 'Barranquilla',
    ubication: {
      lat: '11.013033',
      lon: '-74.823003'
    },
    games: [
      {
        id: 1,
        img: 'https://source.unsplash.com/350x350/?soccer',
        name: 'PES 2020',
        description: 'Soccer game',
        tags: ['video', 'game'],
        studio: 4,
        type: 'Sports',
        link: '#',
        video: '#'
      },
      {
        id: 5,
        img: 'https://source.unsplash.com/350x350/?war',
        name: 'WAR',
        description: 'Militar WAR',
        tags: ['video', 'game'],
        studio: 4,
        type: 'WAR',
        link: '#',
        video: '#'
      }
    ]
  }
];
