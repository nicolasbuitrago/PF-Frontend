import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { DisqusModule } from 'ngx-disqus';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule/* , MatNativeDateModule */ } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

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
import { RegisterFormComponent } from '@app/feat/home-feat/components/forms/register-form/register-form.component';
import { AllNewsComponent } from './pages/all-news/all-news.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TextBlogComponent } from './components/text-blog/text-blog.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EventsFormComponent } from './components/forms/events-form/events-form.component';
import { NewsFormComponent } from './components/forms/news-form/news-form.component';
// import { VinculationComponent } from './components/vinculation/vinculation.component';
// import { VinculationFormComponent } from './components/forms/vinculation-form/vinculation-form.component';

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
    ContactInfoComponent,
    RegisterFormComponent,
    AllNewsComponent,
    BlogComponent,
    EventsFormComponent,
    NewsFormComponent,
    TextBlogComponent,
    CoursesComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule.forRoot(),
    NgxPageScrollModule,
    DisqusModule,
    HomeFeatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatIconModule,
    MatNativeDateModule,
    MatTooltipModule
  ],
  exports: [
    MatDatepickerModule
  ],
  providers: [MatFormFieldModule, MatDatepickerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [NewsFormComponent]
})
export class HomeFeatModule { }
