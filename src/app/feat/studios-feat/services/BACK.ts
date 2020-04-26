import { Studio } from '../models/studio.model';

export const STUDIOS: Studio[] = [ ]; /*
  {
    id: 0,
    image_url: 'https://source.unsplash.com/500x500/?tech',
    name: 'Studio 1',
    description: 'We are study 1',
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
        studio_id: 0,
        name: 'Mario bros',
        description: 'Super game with mario',
        tags: ['video', 'game'],
        image_url: 'https://source.unsplash.com/350x350/?mario,bros',
        link: '#marioLink',
        video: '#marioVideo',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      },
      {
        id: 1,
        image_url: 'https://source.unsplash.com/350x350/?soccer',
        name: 'PES 2020',
        description: 'Soccer game',
        tags: ['video', 'game'],
        studio_id: 0,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      },
      {
        id: 3,
        image_url: 'https://source.unsplash.com/350x350/?militar',
        name: 'COD',
        description: 'Militar FPS',
        tags: ['video', 'game'],
        studio_id: 0,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      },
      {
        id: 2,
        image_url: 'https://source.unsplash.com/350x350/?race',
        name: 'Mario Kars',
        description: 'Super game with mario and cars',
        tags: ['video', 'game'],
        studio_id: 0,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      }
    ]
  },
  {
    id: 1,
    image_url: 'https://source.unsplash.com/500x500/?computer',
    name: 'Studio 2',
    description: 'We are study  2',
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
        image_url: 'https://source.unsplash.com/350x350/?mario,bros',
        name: 'Mario bros',
        description: 'Super game with mario',
        tags: ['video', 'game'],
        studio_id: 1,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      },
      {
        id: 2,
        image_url: 'https://source.unsplash.com/350x350/?race',
        name: 'Mario Kars',
        description: 'Super game with mario and cars',
        tags: ['video', 'game'],
        studio_id: 1,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      }
    ]
  },
  {
    id: 2,
    image_url: 'https://source.unsplash.com/500x500/?videogame',
    name: 'Studio 3',
    description: 'We are study 3',
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
        image_url: 'https://source.unsplash.com/350x350/?mario,bros',
        name: 'Mario bros',
        description: 'Super game with mario',
        tags: ['video', 'game'],
        studio_id: 2,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      },
      {
        id: 3,
        image_url: 'https://source.unsplash.com/350x350/?militar',
        name: 'COD',
        description: 'Militar FPS',
        tags: ['video', 'game'],
        studio_id: 2,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      }
    ]
  },
  {
    id: 3,
    image_url: 'https://source.unsplash.com/500x500/?studio',
    name: 'Studio 4',
    description: 'We are study 4',
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
        image_url: 'https://source.unsplash.com/350x350/?militar',
        name: 'COD',
        description: 'Militar FPS',
        tags: ['video', 'game'],
        studio_id: 3,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      },
      {
        id: 2,
        image_url: 'https://source.unsplash.com/350x350/?race',
        name: 'Mario Kars',
        description: 'Super game with mario and cars',
        tags: ['video', 'game'],
        studio_id: 3,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      }
    ]
  },
  {
    id: 4,
    image_url: 'https://source.unsplash.com/500x500/?dog',
    name: 'Studio 5',
    description: 'We are study 5',
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
        image_url: 'https://source.unsplash.com/350x350/?soccer',
        name: 'PES 2020',
        description: 'Soccer game',
        tags: ['video', 'game'],
        studio_id: 4,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      },
      {
        id: 5,
        image_url: 'https://source.unsplash.com/350x350/?war',
        name: 'WAR',
        description: 'Militar WAR',
        tags: ['video', 'game'],
        studio_id: 4,
        link: '#',
        video: '#',
        created_at: new Date('2020-04-23'),
        updated_at: new Date('2020-04-23')
      }
    ]
  }
];*/
