import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudiosSubModule } from './modules/studios-sub.module';
import { StudiosComponent } from './pages/studios/studios.component';
import { StudioComponent } from './pages/studio/studio.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: StudiosComponent,
    data: { animation: 'studios'}
  },
  {
    path: 'info/:id',
    component: StudioComponent,
    data: { animation: 'studio'}// ,
    // children: [
    //   {
    //     path: ':idGame',
    //     component: GameComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiosFeatRoutingModule { }
