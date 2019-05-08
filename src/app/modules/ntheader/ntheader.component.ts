/**
 * @license
 * Orient Software © 2019 All Rights Reserved
 * Licensed under the MIT License.
 */

import { Component, Input } from '@angular/core';
import { HeaderSettings } from '../../interfaces/interfaces';

/**
 * NTHeaderComponent
 */
@Component({
  selector: 'NTHeader',
  templateUrl: './ntheader.component.html',
})

export class NTHeaderComponent {

  @Input() headerSettings: HeaderSettings;

  constructor() { }

}
