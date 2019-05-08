/**
 * @license
 * Orient Software © 2019 All Rights Reserved
 * Licensed under the MIT License.
 */

import { Component, Input } from '@angular/core';

/**
 * NTFooterComponent
 * 
 * Footer content with boostrap component
 * 
 * example:
 * ```ts
 * <NTFooter title="{{bottomTitle}}"></NTFooter>
 * ```
 */
@Component({
  selector: 'NTFooter',
  templateUrl: './ntfooter.component.html',
  styleUrls: ['./ntfooter.component.scss']
})
export class NTFooterComponent {

  /**
   * title input as string content
   * 
   * @type {string}
   */
  @Input() title: string;

  constructor() { }
}
