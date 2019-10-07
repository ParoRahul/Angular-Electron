import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CornerButtonsComponent } from './corner-buttons/corner-buttons.component';
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


@NgModule({
  declarations: [
    AppComponent,
    CornerButtonsComponent,
    TitlebarComponent,
    ToolbarComponent,
    StatusbarComponent,
    LoginComponent,
    SignupComponent,
    MessagebarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
