import { Component, OnInit, Input } from '@angular/core';

import { CarouselItem } from '@shared/interfaces/carousel-item.model';
import { ItemComponent } from '../../models/item.component.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, ItemComponent {

  @Input() data: CarouselItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
