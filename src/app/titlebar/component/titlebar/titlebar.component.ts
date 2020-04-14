import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {
  isResized: boolean;
  disableClose: boolean;
  AppTitle: string = 'Angular-Electron-Demo-App';

  @ViewChild(MenubarComponent,{static:true}) menuBar;

  @Output() winMinimize = new EventEmitter();
  @Output() winResize = new EventEmitter();
  @Output() winClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
      this.isResized = false;
  }

  onMinimize(event){
      this.winMinimize.emit();
  }

  onResize(event){
      this.isResized = !this.isResized;
      this.winResize.emit(this.isResized);
  }

  onClose(event){
      this.disableClose = true;
      this.winClose.emit();
  }

  collapseMenu() {
    this.menuBar.collapseall();
  }

}

