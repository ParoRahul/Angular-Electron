import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomDialog } from '../custom-dialog/custom-dialog.component';
//const { remote } = (<any>window).require('electron');

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {
  appTitle:string;
  logoUrl:string;
  isResized:boolean;
  disableClose:boolean;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
      this.isResized=false;
      this.appTitle='Angular-Electron';
      this.logoUrl='assets/logo.png'
      this.disableClose=false;
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

  onClose(){
      console.log('Windows going to be close');
      this.disableClose=true;
      const dialogRef = this.dialog.open(CustomDialog,{
          data:{
            message: 'Are you sure want to close the Application ?',
            buttonText: {ok: 'Yes',cancel: 'No'},
            dialogIconName :'warning'
          }
      });

      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        console.log(`closing box with ${confirmed}`);
        this.disableClose = !confirmed;
        if (confirmed){
            //remote.getCurrentWindow().close()
            //need to close all dB service here 
            this.disableClose = true
        }
        else
            this.disableClose = false 
      });
  }

}
