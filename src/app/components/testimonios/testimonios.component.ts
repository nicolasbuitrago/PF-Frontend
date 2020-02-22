import { Component, OnInit } from '@angular/core';

import { Testimonio } from '../../models/Testimonio';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent implements OnInit {

  testimonios: Testimonio[] = [
    {
      id: 0,
      mesg: 'Es asombroso',
      img: '//placeimg.com/200/200/people',
      author: 'Carlos Perez',
      authorInfo: 'Director of Tuna Games'
    },
    {
      id: 1,
      mesg: 'Fantastico',
      img: '//placeimg.com/200/200/people',
      author: 'Lucas Ramirez',
      authorInfo: 'Art Designer of Caribbean Games'
    },
    {
      id: 2,
      mesg: 'Una maravilla',
      img: '//placeimg.com/200/200/people',
      author: 'Mario Diaz',
      authorInfo: 'Sub-Director of Caption Games'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
