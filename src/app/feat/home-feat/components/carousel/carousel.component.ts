import { Component, OnInit, Input } from '@angular/core';

import { DataItem } from '../../models/data-item.model';
import { Carousel, CarouselItem } from '@shared/interfaces/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, DataItem {

  @Input() data: Carousel;

  constructor() { }

  ngOnInit(): void {
  }

}
