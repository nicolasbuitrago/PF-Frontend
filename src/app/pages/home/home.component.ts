import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/services/home.service';
import { CarouselItem } from '../../models/carousel-item.model';
import { Testimonio } from '../../models/testimonio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: CarouselItem[];
  testimonios: Testimonio[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getItems();
    this.getTestimonios();
  }

  getItems(): void {
    this.homeService.getItems()
    .subscribe(items => this.items = items);
  }

  getTestimonios(): void {
    this.homeService.getTestimonios()
    .subscribe(testimonios => this.testimonios = testimonios);
  }

}
