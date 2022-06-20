import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedTwoRoutingModule } from './lazy-loaded-two-routing.module';
import { LazyLoadedTwoComponent } from './lazy-loaded-two.component';

@NgModule({
  declarations: [
    LazyLoadedTwoComponent,
  ],
  imports: [
    CommonModule,
    LazyLoadedTwoRoutingModule,
  ]
})
export class LazyLoadedTwoModule { }
