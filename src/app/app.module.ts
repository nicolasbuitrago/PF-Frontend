import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
// import { NgxPageScrollModule } from 'ngx-page-scroll';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';

import { SharedModule } from './shared';
import { CoreModule } from './core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    AppRoutingModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
