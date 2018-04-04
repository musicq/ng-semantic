import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SemanticModule } from '../components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
