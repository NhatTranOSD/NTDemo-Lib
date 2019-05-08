/**
 * @license
 * Orient Software © 2019 All Rights Reserved
 * Licensed under the MIT License.
 */

import { Component, EventEmitter, Output } from '@angular/core';
import { UserLogin } from './userlogin';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './components/modal/ntmodal.component';

/**
 * NTHeaderComponent
 * 
 * Login page with binding model and show popup
 * 
 * Example:
 * ```ts
 * <NTLogin (userName)='getUserName($event)'
 *  (passWord)='getPassWord($event)'
 *  (rememberMe)='getRememberMe($event)'>
 * </NTLogin>
 * ```
 */
@Component({
  selector: 'NTLogin',
  templateUrl: './ntlogin.component.html',
  styleUrls: ['./ntlogin.component.scss']
})

export class NTLoginComponent {

  /**
   * userName output
   * 
   * @returns {string}
   */
  @Output() userName = new EventEmitter<string>();

  /**
   * passWord output
   * 
   * @returns {string}
   */
  @Output() passWord = new EventEmitter<string>();

  /**
   * rememberMe output
   * 
   * @returns {boolean}
   */
  @Output() rememberMe = new EventEmitter<boolean>();

  // Init model
  userLogin: UserLogin = {
    UserName: '',
    Password: '',
    RememberMe: false
  };

  constructor(private modalService: NgbModal) { }

  // Onlick to open modal
  open(): void {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.UserName = this.userLogin.UserName;
    modalRef.componentInstance.PassWord = this.userLogin.Password;
    modalRef.componentInstance.RememberMe = this.userLogin.RememberMe;

    // Received result message
    modalRef.result.then((data) => {
      this._outputBinding();
    });
  }

  _outputBinding(): void {
    this.userName.emit(this.userLogin.UserName);
    this.passWord.emit(this.userLogin.Password);
    this.rememberMe.emit(this.userLogin.RememberMe);
  }

}

