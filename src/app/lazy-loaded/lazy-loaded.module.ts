import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedComponent } from './lazy-loaded.component';
import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';



@NgModule({
  declarations: [
    LazyLoadedComponent,
  ],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule,
  ]
})
export class LazyLoadedModule { }
