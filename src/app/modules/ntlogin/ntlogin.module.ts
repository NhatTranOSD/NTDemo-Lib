/**
 * @license
 * Orient Software © 2019 All Rights Reserved
 * Licensed under the MIT License.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { NTLoginComponent } from '../ntlogin/ntlogin.component';
import { NgbdModalContent } from './components/modal/ntmodal.component';


@NgModule({
  declarations: [NTLoginComponent, NgbdModalContent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbModule,
  ],
  exports: [
    NTLoginComponent,
    NgbdModalContent
  ],
  bootstrap: [NTLoginComponent],
  entryComponents: [NgbdModalContent]
})
export class NTLoginModule { }
