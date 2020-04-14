import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import { TitlebarRoutingModule } from './titlebar.routing.module';
import { TitlebarComponent } from './component/titlebar/titlebar.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { MenuitemComponent } from './component/menuitem/menuitem.component';

@NgModule({
  declarations: [ TitlebarComponent,
                  MenubarComponent,
                  MenuitemComponent ],
  imports: [
              SharedModule,
              TitlebarRoutingModule
  ],
  exports: [  TitlebarComponent]
})
export class TitlebarModule { }
