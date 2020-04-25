import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MembershipRoutingModule } from './membership-routing.module';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [SignupComponent,
                 LoginComponent],
  imports: [
    SharedModule,
    MembershipRoutingModule
  ],
  exports :[SignupComponent,
            LoginComponent]
})
export class MembershipModule { }
