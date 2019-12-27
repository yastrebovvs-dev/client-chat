import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss']
})

export class FormAuthComponent{
  @Output() onFlipAuth: EventEmitter<any> = new EventEmitter<any>()
  emailReg = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailReg)]),
    password: new FormControl('', [Validators.required])
  })

  getErrMsgEmail() {
    return this.authForm.controls.email.hasError('required') ? 'You must enter a value' :
      this.authForm.controls.email.hasError('pattern') ? 'Not a valid email' : '';
  }

  getErrMsgPassword() {
    return this.authForm.controls.password.hasError('required') ? 'You must enter a value' : '';
  }

  autorize(){
    console.log('email', this.authForm.controls.email.value)
    console.log('password', this.authForm.controls.password.value)
  }

  flip(){
    this.onFlipAuth.emit()
  }
}