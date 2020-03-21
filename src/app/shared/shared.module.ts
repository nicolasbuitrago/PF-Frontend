import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

import { ItemDirective } from './directives/item.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    NavBarComponent,
    PageTitleComponent,
    FooterComponent,
    PageNotFoundComponent,
    ItemDirective,
    SafePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavBarComponent,
    FooterComponent,
    PageTitleComponent,
    ItemDirective,
    SafePipe
  ]
})
export class SharedModule { }
