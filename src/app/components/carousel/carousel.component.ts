import { Component, OnInit } from '@angular/core';

import { CarouselItem } from '../../models/CarouselItem';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  items: CarouselItem[] = [
    {
      id: 0,
      title: 'Carousel item 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus omnis sequi pariatur?',
      img: 'img',
      link: '#'
    },
    {
      id: 1,
      title: 'Carousel item 2',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis minus dicta consequuntur quae temporibus totam impedit corporis laudantium quas eum fugit, fugiat, aliquid ipsa qui tempora.',
      img: 'img',
      link: '#'
    },
    {
      id: 2,
      title: 'Carousel item 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus omnis sequi pariatur',
      img: 'img',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
