import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {

  public dynamicTabs = [
    {
        label: 'User Information',
        component: LoginComponent
    },
    {
        label: 'Payment',
        component: SignupComponent
    },
    {
        label: 'Thank You',
        component: HomeComponent
    }
];

  constructor() { }

  ngOnInit() {
  }

}
