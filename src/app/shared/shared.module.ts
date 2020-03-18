import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

import { ItemDirective } from './directives/item.directive';

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
    ItemDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavBarComponent,
    FooterComponent,
    PageTitleComponent,
    ItemDirective
  ]
})
export class SharedModule { }
