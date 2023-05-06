import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { BusinessInformationComponent } from './components/business-information/business-information.component';
import { ConfirmRegisterComponent } from './components/confirm-register/confirm-register.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    RegisterComponent,
    BusinessInformationComponent,
    ConfirmRegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  exports: [NgSelectModule],
})
export class AuthModule {}
