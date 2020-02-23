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

  constructor() { }

  ngOnInit(): void {
  }

}
