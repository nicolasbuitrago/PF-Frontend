import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/pages/home/home.component';
import { StudiosComponent } from '../app/pages/studios/studios.component';
import { EventsComponent } from '../app/pages/events/events.component';
import { ContactComponent } from '../app/pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'studios', component: StudiosComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
