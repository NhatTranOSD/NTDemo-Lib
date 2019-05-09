/**
 * @license
 * Orient Software © 2019 All Rights Reserved
 * Licensed under the MIT License.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderSettings } from '../../interfaces/interfaces';

/**
 * NTHeaderComponent
 */
@Component({
  selector: 'NTHeader',
  templateUrl: './ntheader.component.html',
})

export class NTHeaderComponent {

  /**
   * headerSettings input as HeaderSettings interface
   * 
   * @type {HeaderSettings}
   */
  @Input() headerSettings: HeaderSettings;

  /**
   * searchString output
   * 
   * @returns {string}
   */
  @Output() onSubmit = new EventEmitter<string>();

  searchString = '';

  constructor() { }

  submitSearch(): void {
    this.onSubmit.emit(this.searchString);
  }

}
