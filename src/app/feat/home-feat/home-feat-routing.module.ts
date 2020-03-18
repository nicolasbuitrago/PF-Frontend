import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSubModule } from './modules/home-sub.module';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';

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
    component: EventsComponent,
    children: [
      { // no lazy loading module
        path: 'submodule',
        component: HomeSubModule
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      { // no lazy loading module
        path: 'submodule',
        component: HomeSubModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFeatRoutingModule { }
