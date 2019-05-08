/**
 * @license
 * Orient Software © 2019 All Rights Reserved
 * Licensed under the MIT License.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NTFooterComponent } from '../ntfooter/ntfooter.component';

@NgModule({
  declarations: [NTFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NTFooterComponent
  ],
  bootstrap: [
    NTFooterComponent
  ]
})
export class NTFooterModule { }
