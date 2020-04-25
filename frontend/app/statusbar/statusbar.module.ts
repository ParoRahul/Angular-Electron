import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import { StatusbarRoutingModule } from './statusbar.routing.module';
import { StatusbarComponent } from './component/statusbar/statusbar.component';


@NgModule({
  declarations: [StatusbarComponent],
  imports: [
    SharedModule,
    StatusbarRoutingModule
  ],
  exports: [StatusbarComponent]
})
export class StatusbarModule { }
