import { Component, OnInit } from '@angular/core';

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
  }

  onResize(){
    console.log('Windows going to be resized');
    this.isResized=!this.isResized;
  }

  onMaximize(){
    console.log('Windows going to be maximized');
    this.isResized=!this.isResized;
  }

  onClose(){
    console.log('Windows going to be close');
  }

}
