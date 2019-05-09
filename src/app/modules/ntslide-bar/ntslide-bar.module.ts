import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NTSlideBarComponent } from './ntslide-bar.component';
import { NTMenuItemComponent } from './components/menuitem/menu-item.component';

@NgModule({
  declarations: [NTSlideBarComponent, NTMenuItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NTSlideBarComponent,
    NTMenuItemComponent
  ],
  bootstrap: [
    NTSlideBarComponent,
    NTMenuItemComponent
  ]
})
export class NTSlideBarModule { }
