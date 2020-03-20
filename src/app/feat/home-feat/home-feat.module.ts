import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeFeatRoutingModule } from './home-feat-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { GamesComponent } from './components/games/games.component';
import { SectionComponent } from './components/sections/section/section.component';
import { SectionImgBgComponent } from './components/sections/section-img-bg/section-img-bg.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    EventsComponent,
    ContactComponent,
    CarouselComponent,
    GamesComponent,
    SectionComponent,
    SectionImgBgComponent,
    TestimoniosComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    NgxPageScrollModule,
    HomeFeatRoutingModule
  ]
})
export class HomeFeatModule { }
