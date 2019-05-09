/**
 * @license
 * Orient Software © 2019 All Rights Reserved
 * Licensed under the MIT License.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'NTMenuItem',
  template: `
    <a [href]="link" class="list-group-item list-group-item-action">
        <div class="row text-dark">
            <div class="col-lg-3">
            <i [ngClass]="icon"></i>
            </div>
            <div class="col-lg-9">{{title}}</div>
        </div>
        <ng-content></ng-content>
    </a>
    `,
})
export class NTMenuItemComponent {

  /**
  * Input menuitem link
  * 
  * @type {boolean}
  */
  @Input() link: string;

  /**
  * Input menuitem title
  * 
  * @type {boolean}
  */
  @Input() title: string;

  /**
  * Input menuitem icon awesome class
  * 
  * @type {boolean}
  */
  @Input() icon: string;

}