import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSubModule } from './modules/home-sub.module';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AllNewsComponent } from './pages/all-news/all-news.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { // no lazy loading module
        path: 'submodule',
        component: HomeSubModule
      }
    ],
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'news',
    component: AllNewsComponent
  },
  {
    path: 'new/:id',
    component: BlogComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFeatRoutingModule { }
