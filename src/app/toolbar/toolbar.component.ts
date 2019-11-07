import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { LoginComponent } from 'src/app/login/login.component';
import { DialogService } from '../services/dialog.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  /* constructor(private dialog: MatDialog) { } */

  constructor(private dialog: DialogService) { }

  ngOnInit() {
  
  }

  onLogIn(){
    /* this.dialog.open(LoginComponent,{ disableClose: true }) */
    this.dialog.openDialog(LoginComponent)
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
