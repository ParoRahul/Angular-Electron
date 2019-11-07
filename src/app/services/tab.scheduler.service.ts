import { Injectable } from '@angular/core';
import { TabContents } from '../common/tabContent';
import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../signup/signup.component';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class TabScheduler {

  constructor() { }

  getComponent(title:string){
    if (title=="New Ledger")
        return new TabContents(SignupComponent,{})  
    if (title=="Account Group")
        return new TabContents(DialogComponent,{})      
    else
        return new TabContents(HomeComponent,{})
  }
}
