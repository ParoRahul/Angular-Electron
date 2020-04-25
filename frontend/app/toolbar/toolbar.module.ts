import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ToolbarRoutingModule } from './toolbar.routing.module';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    SharedModule,
    ToolbarRoutingModule
  ],
  exports: [ToolbarComponent],
  entryComponents : [ToolbarComponent]
})
export class ToolbarModule { }
