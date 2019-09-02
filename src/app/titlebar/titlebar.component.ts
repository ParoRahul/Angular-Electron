import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {
  appTitle:string='Angular-Electron'
  logoUrl:string='assets/logo.png'
  constructor() { }

  ngOnInit() {
  }

}
