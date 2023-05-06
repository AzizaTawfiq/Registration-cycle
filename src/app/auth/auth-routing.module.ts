import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ConfirmRegisterComponent } from './components/confirm-register/confirm-register.component';
import { BusinessInformationComponent } from './components/business-information/business-information.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: 'business-information',
    component: BusinessInformationComponent,
  },
  {
    path: 'success',
    component: ConfirmRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
