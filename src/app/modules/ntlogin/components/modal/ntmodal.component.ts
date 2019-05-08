import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Custom Ng-Bootstrap Modal
 */
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>UserName: {{UserName}}</p>
      <p>PassWord: {{PassWord}}</p>
      <p>RememberMe: {{RememberMe}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="onClose('Close click')">Close</button>
    </div>
  `
})

export class NgbdModalContent {

  /**
   * Pass UserName
   * @type {string}
   */
  @Input() UserName: string;

  /**
   * Pass PassWord
   * @type {string}
   */
  @Input() PassWord: string;

  /**
   * Pass RememberMe
   * @type {boolean}
   */
  @Input() RememberMe: boolean;

  constructor(public activeModal: NgbActiveModal) { }

  onClose(message: string): void {

    // close modal
    this.activeModal.close(message);
  }
}
