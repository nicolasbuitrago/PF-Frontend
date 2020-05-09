import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeFeatRoutingModule } from './home-feat-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';


import { CarouselComponent } from './components/carousel/carousel.component';
import { GamesComponent } from './components/games/games.component';
import { SectionComponent } from './components/section/section.component';
import { SectionImgBgComponent } from './components/sections/section-img-bg/section-img-bg.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { AboutComponent } from './pages/about/about.component';
import { GameComponent } from './components/game/game.component';
import { StudioComponent } from './components/studio/studio.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { NewsComponent } from './components/news/news.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { ServicesComponent } from './components/services/services.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { StudiosComponent } from './components/studios/studios.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

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
    AboutComponent,
    GameComponent,
    StudioComponent,
    FaqComponent,
    SponsorsComponent,
    NewsComponent,
    MentorsComponent,
    ServicesComponent,
    EventsListComponent,
    StudiosComponent,
    FaqsComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule.forRoot(),
    NgxPageScrollModule,
    HomeFeatRoutingModule
  ]
})
export class HomeFeatModule { }
