import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfinityScrollerComponent } from './infinity-scroller/infinity-scroller.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    InfinityScrollerComponent
  ],
  exports: [
    InfinityScrollerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class LegoUiModule { }
