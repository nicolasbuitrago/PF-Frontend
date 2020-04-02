import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CommonModule } from '@angular/common';

import { StudiosFeatRoutingModule } from './studios-feat-routing.module';
import { StudiosComponent } from './pages/studios/studios.component';
import { StudioComponent } from './pages/studio/studio.component';
import { VideogamesComponent } from './components/videogames/videogames.component';
import { GameComponent } from './pages/game/game.component';


@NgModule({
  declarations: [
    StudiosComponent,
    StudioComponent,
    VideogamesComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudiosFeatRoutingModule
  ]
})
export class StudiosFeatModule { }
