import { Studio } from '../models/studio.model';

export const STUDIOS: Studio[] = [
  {
    id: 0,
    name: 'Studio 1',
    type: 'Video games',
    description: 'Somos el estudio 1',
    city: 'Barranquilla',
    ubication: {
      lat: '10.9799669',
      lon: '-74.8013085'
    },
    games: [
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
        studio: 0,
        type: 'Sports'
      },
      {
        id: 3,
        name: 'COD',
        description: 'Militar FPS',
        studio: 0,
        type: 'FPS'
      },
      {
        id: 2,
        name: 'Mario Kars',
        description: 'Super game with mario and cars',
        studio: 0,
        type: 'Race'
      }
    ]
  },
  {
    id: 1,
    name: 'Studio 2',
    type: 'Art design',
    description: 'Somos el estudio 2',
    city: 'Cartagena',
    ubication: {
      lat: '10.395595',
      lon: '-75.481644'
    },
    games: [
      {
        id: 0,
        name: 'Mario bros',
        description: 'Super game with mario',
        studio: 1,
        type: 'Arcade'
      },
      {
        id: 2,
        name: 'Mario Kars',
        description: 'Super game with mario and cars',
        studio: 1,
        type: 'Race'
      }
    ]
  },
  {
    id: 2,
    name: 'Studio 3',
    type: 'Visual recognition',
    description: 'Somos el estudio 3',
    city: 'Barranquilla',
    ubication: {
      lat: '11.001032',
      lon: '-74.822469'
    },
    games: [
      {
        id: 0,
        name: 'Mario bros',
        description: 'Super game with mario',
        studio: 2,
        type: 'Arcade'
      },
      {
        id: 3,
        name: 'COD',
        description: 'Militar FPS',
        studio: 2,
        type: 'FPS'
      }
    ]
  },
  {
    id: 3,
    name: 'Studio 4',
    type: 'Video games',
    description: 'Somos el estudio 4',
    city: 'Santa Marta',
    ubication: {
      lat: '11.245321',
      lon: '-74.211819'
    },
    games: [
      {
        id: 3,
        name: 'COD',
        description: 'Militar FPS',
        studio: 3,
        type: 'FPS'
      },
      {
        id: 2,
        name: 'Mario Kars',
        description: 'Super game with mario and cars',
        studio: 3,
        type: 'Race'
      }
    ]
  },
  {
    id: 4,
    name: 'Studio 5',
    type: 'Video games',
    description: 'Somos el estudio 5',
    city: 'Barranquilla',
    ubication: {
      lat: '11.013033',
      lon: '-74.823003'
    },
    games: [
      {
        id: 1,
        name: 'PES 2020',
        description: 'Soccer game',
        studio: 4,
        type: 'Sports'
      },
      {
        id: 5,
        name: 'WAR',
        description: 'Militar WAR',
        studio: 4,
        type: 'WAR'
      }
    ]
  }
];
