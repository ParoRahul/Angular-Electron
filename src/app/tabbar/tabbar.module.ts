import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TabbarRoutingModule } from './tabbar.routing.module';
import { TabbarComponent } from './component/tabbar/tabbar.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [ TabbarComponent,
                  HomeComponent],
  imports: [
    SharedModule,
    TabbarRoutingModule
  ],
  exports:[ TabbarComponent ]
})
export class TabbarModule { }
