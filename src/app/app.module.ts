
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxElectronModule } from 'ngx-electron';

import 'hammerjs';
/* import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs'; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MenuComponent } from './menubar/menu/menu.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { TabComponent } from './tabbar/tab/tab.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { MessagebarComponent } from './messagebar/messagebar.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { SettingsDbService } from './services/settings.db.service';
import { MessageService } from './services/message.service';
import { UserDbService } from './services/user.db.service';
import { AuthoriationService } from './services/authoriation.service';

import { AppErrorHandler } from './error/app.error.handler';
import { AuthGuard } from './services/auth-guard.service';
import { CustomDialog } from './custom-dialog/custom-dialog.component';

import { DynamicCompDirective } from './common/dynamic-comp.directive';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './services/dialog.service';
import { ElectronConnector } from './services/electron.service';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    ToolbarComponent,
    StatusbarComponent,
    MessagebarComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CustomDialog,
    MenubarComponent,
    TabbarComponent,
    MenuComponent,
    TabComponent,
    DynamicCompDirective,
    DialogComponent
  ],
  entryComponents:[ LoginComponent,
                    CustomDialog ,
                    DialogComponent,
                    TabComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /* MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatTabsModule, */
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxElectronModule,
    
  ],
  providers: [
    SettingsDbService,
    MessageService,
    UserDbService,
    {provide:ErrorHandler, useClass: AppErrorHandler},
    AuthoriationService,
    AuthGuard,
    DialogService,
    ElectronConnector
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
