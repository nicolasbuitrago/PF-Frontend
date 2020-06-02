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
import { SpinnerComponent } from './components/spinner/spinner.component';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    NavBarComponent,
    PageTitleComponent,
    FooterComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    ItemDirective,
    SafePipe,
    EmptyPageComponent,
    SearchComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavBarComponent,
    FooterComponent,
    PageTitleComponent,
    SpinnerComponent,
    EmptyPageComponent,
    SearchComponent,
    ItemDirective,
    SafePipe
  ]
})
export class SharedModule { }
