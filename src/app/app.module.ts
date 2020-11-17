import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IsLoggedDirective } from './is-logged.directive';
import { IsNotLoggedDirective } from './is-not-logged.directive';

@NgModule({
  declarations: [
    AppComponent,
    IsLoggedDirective,
    IsNotLoggedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
