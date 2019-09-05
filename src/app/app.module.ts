import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CornerButtonsComponent } from './corner-buttons/corner-buttons.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { LoginComponent } from './login/login.component';

import { SettingsDbService } from './services/settings-db.service';
import { MessageService } from './services/message.service';
import { UserDbService } from './services/user-db.service';


@NgModule({
  declarations: [
    AppComponent,
    CornerButtonsComponent,
    TitlebarComponent,
    ToolbarComponent,
    StatusbarComponent,
    LoginComponent
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
    UserDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
