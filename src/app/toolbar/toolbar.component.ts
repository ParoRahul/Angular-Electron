import { Component, OnInit } from '@angular/core';
/* import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';  */
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
    const dialogRef = this.dialog.openDialog(LoginComponent,
                                              {
                                                height:450,
                                                width:300
                                              },{})
    dialogRef.afterClosed.subscribe( result => {
      console.log(result);
      //Process the rewsult.
    });
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
