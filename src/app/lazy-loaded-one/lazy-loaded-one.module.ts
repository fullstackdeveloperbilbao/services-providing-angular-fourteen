import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedOneRoutingModule } from './lazy-loaded-one-routing.module';
import { LazyLoadedOneComponent } from './lazy-loaded-one.component';



@NgModule({
  declarations: [
    LazyLoadedOneComponent,
  ],
  imports: [
    CommonModule,
    LazyLoadedOneRoutingModule,
  ]
})
export class LazyLoadedOneModule { }
