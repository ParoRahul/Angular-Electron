import { Injectable } from '@angular/core';
import { TabContents } from '../common/tabContent';
import { DialogComponent } from '../dialog/dialog.component';

import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class TabScheduler {

  constructor() { }

  getComponent(title:string){
    if (title=="New Ledger")
        return new TabContents(SignupComponent,{})  
    if (title=="Account Group")
        return new TabContents(LoginComponent,{})      
    else
        return new TabContents(HomeComponent,{})
  }
}
