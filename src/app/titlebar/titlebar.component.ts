import { Component, OnInit, Output , EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {
  logoUrl:string;
  isResized:boolean;
  disableClose:boolean;

  @Input() appTitle:string;
  @Output() winMinimize = new EventEmitter();
  @Output() winResize = new EventEmitter();
  @Output() winClose = new EventEmitter();


  constructor() { }

  ngOnInit() {
      this.isResized=false;
      this.logoUrl='assets/logo.png'
  }

  onMinimize(event){
      this.winMinimize.emit(); 
  }

  onResize(event){
      this.isResized=!this.isResized;
      this.winResize.emit(this.isResized);
  }

  onClose(event){
      this.disableClose=true;
      this.winClose.emit();
  }

}
