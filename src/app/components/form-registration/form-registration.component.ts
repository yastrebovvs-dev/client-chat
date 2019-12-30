import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})
export class FormRegistrationComponent{
  @Output() onFlipReg: EventEmitter<any> = new EventEmitter<any>()
  emailReg = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
  regForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailReg)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  
  getErrMsgName() {
    return this.regForm.controls.name.hasError('required') ? 'You must enter a value' : '';
  }

  getErrMsgEmail() {
    return this.regForm.controls.email.hasError('required') ? 'You must enter a value' :
      this.regForm.controls.email.hasError('pattern') ? 'Not a valid email' : '';
  }

  getErrMsgPassword() {
    return this.regForm.controls.password.hasError('required') ? 'You must enter a value' : 
      this.regForm.controls.password.hasError('pattern') ? 'minimal length 6 charset' : '';
  }

  register(){
    console.log('email', this.regForm.controls.email.value)
    console.log('password', this.regForm.controls.password.value)
  }

  flip(){
    this.onFlipReg.emit()
  }

}