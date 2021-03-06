
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule} from './shared/shared.module';

import { TitlebarModule } from './titlebar/titlebar.module';
import { TabbarModule } from './tabbar/tabbar.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { StatusbarModule } from './statusbar/statusbar.module';

import { MembershipModule } from './membership/membership.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents:[ ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TitlebarModule,
    TabbarModule,
    ToolbarModule,
    StatusbarModule,
    MembershipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
