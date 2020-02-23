import { Component, OnInit } from '@angular/core';

import { Studio } from '../../models/Studio';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.css']
})
export class StudiosComponent implements OnInit {

  studios: Studio[] = [
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
