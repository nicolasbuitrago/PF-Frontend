import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudiosSubModule } from './modules/studios-sub.module';
import { StudiosComponent } from './pages/studios/studios.component';
import { StudioComponent } from './pages/studio/studio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: StudiosComponent,
    children: [
      { // no lazy loading module
        path: 'submodule',
        component: StudiosSubModule
      }
    ]
  },
  {
    path: 'info/:id',
    component: StudioComponent,
    children: [
      { // no lazy loading module
        path: 'submodule',
        component: StudiosSubModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiosFeatRoutingModule { }
