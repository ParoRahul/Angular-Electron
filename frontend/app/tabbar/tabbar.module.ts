import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TabbarRoutingModule } from './tabbar.routing.module';
import { TabbarComponent } from './component/tabbar/tabbar.component';
import { HomeComponent } from './component/home/home.component';
import { NewprojectComponent } from './component/newproject/newproject.component';


@NgModule({
  declarations: [ TabbarComponent,
                  HomeComponent,
                  NewprojectComponent],
  imports: [
    SharedModule,
    TabbarRoutingModule
  ],
  exports:[ TabbarComponent ]
})
export class TabbarModule { }
