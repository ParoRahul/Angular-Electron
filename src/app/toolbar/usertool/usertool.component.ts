import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'usertool',
  templateUrl: './usertool.component.html',
  styleUrls: ['./usertool.component.css']
})
export class UsertoolComponent implements OnInit {
  
  buttonDisabled:boolean;

  constructor(private dialog: MatDialog) {
    this.buttonDisabled=false;
   }

  ngOnInit() {

  }

  onClick(){
   console.log('item clicked');
   this.dialog.open(LoginComponent,{ disableClose: true })
  }

}
