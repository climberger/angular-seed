import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// TODO: Add module structure with core module, shared module and feature modules and related routing modules
// TODO: Add own navbar as component
// TODO: Add redux, redux router, redux form, redux logging and redux devkit
// TODO: Add own redux list store functionality
// TODO: Add own redux dictionary
// TODO: Add own redux set state property functionality
// TODO: Add own logging service
// TODO: Add own translation pipe
// TODO: Add own generic table
