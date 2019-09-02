import { Component, OnInit } from '@angular/core';
import { ToolbarItem } from '../model/toolbar.item.model'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  upperToolItms:ToolbarItem [] = [{ iconName:'account_circle',role:'logIn',hidden:false}]
  lowerToolItms:ToolbarItem [] = [{ iconName:'settings_applications',role:'settings',hidden:false},
                                  { iconName:'lock_open',role:'lockApp',hidden:false},
                                  { iconName:'fullscreen',role:'screenShot',hidden:false},
                                  { iconName:'bug_report',role:'issueReport',hidden:false}]

  constructor() { }

  ngOnInit() {
  }

}
