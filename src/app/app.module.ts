import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerLoadedOneComponent } from './eager-loaded-one/eager-loaded-one.component';
import { EagerLoadedTwoComponent } from './eager-loaded-two/eager-loaded-two.component';

@NgModule({
  declarations: [AppComponent, EagerLoadedOneComponent, EagerLoadedTwoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
