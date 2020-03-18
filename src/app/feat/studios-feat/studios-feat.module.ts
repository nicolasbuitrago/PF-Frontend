import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CommonModule } from '@angular/common';

import { StudiosFeatRoutingModule } from './studios-feat-routing.module';
import { StudiosComponent } from './pages/studios/studios.component';


@NgModule({
  declarations: [StudiosComponent],
  imports: [
    CommonModule,
    SharedModule,
    StudiosFeatRoutingModule
  ]
})
export class StudiosFeatModule { }
