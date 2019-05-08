import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NTSlideBarComponent } from './ntslide-bar.component';

@NgModule({
  declarations: [NTSlideBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NTSlideBarComponent
  ],
  bootstrap: [
    NTSlideBarComponent
  ]
})
export class NTSlideBarModule { }
