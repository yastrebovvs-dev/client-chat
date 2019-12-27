import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from '../screens/login-screen/login-screen.component';
import { FormAuthComponent } from '../components/form-auth/form-auth.component';
import { FormRegistrationComponent } from '../components/form-registration/form-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    LoginScreenComponent,
    FormAuthComponent,
    FormRegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    LoginScreenComponent,
    FormAuthComponent,
    FormRegistrationComponent,
  ]
})

export class LoginScreenModule { }