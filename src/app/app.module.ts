import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { LoginComponent } from './login/login.component';

import { SettingsDbService } from './services/settings.db.service';
import { MessageService } from './services/message.service';
import { UserDbService } from './services/user.db.service';
import { SignupComponent } from './signup/signup.component';
import { MessagebarComponent } from './messagebar/messagebar.component';
import { AppErrorHandler } from './error/app.error.handler';
import { AuthoriationService } from './services/authoriation.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { CustomDialog } from './custom-dialog/custom-dialog.component';

import { NgxElectronModule } from 'ngx-electron';
import { MenubarComponent } from './menubar/menubar.component';

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
    MenubarComponent
  ],
  entryComponents:[ LoginComponent,
                    CustomDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxElectronModule
  ],
  providers: [
    SettingsDbService,
    MessageService,
    UserDbService,
    {provide:ErrorHandler, useClass: AppErrorHandler},
    AuthoriationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
