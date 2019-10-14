import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { 
 
  }

  ngOnInit() {
  
  }

  onLogIn(){
    this.dialog.open(LoginComponent,{ disableClose: true })
  }

  onApplySettings(){

  }

  onLock(){

  }

  onCaptureScreen(){

  }

  onBugReporting(){

  }

  onSearch(){

  }

}
