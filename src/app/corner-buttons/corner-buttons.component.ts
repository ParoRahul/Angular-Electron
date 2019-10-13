import { Component, OnInit } from '@angular/core';
//const { remote } = (<any>window).require('electron');
@Component({
  selector: 'app-corner-buttons',
  templateUrl: './corner-buttons.component.html',
  styleUrls: ['./corner-buttons.component.css']
})
export class CornerButtonsComponent implements OnInit {

  isResized:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  onMinimize(){
    console.log('Windows going to be minimize');
    //remote.getCurrentWindow().minimize();
  }

  onResize(){
    console.log('Windows going to be resized');
    this.isResized=!this.isResized;
    //remote.getCurrentWindow().unmaximize();

  }

  onMaximize(){
    console.log('Windows going to be maximized');
    this.isResized=!this.isResized;
    //remote.getCurrentWindow().maximize()
  }

  onClose(){
    console.log('Windows going to be close');
    //remote.getCurrentWindow().close()
  }

}
