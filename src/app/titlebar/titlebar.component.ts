import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomDialog } from '../custom-dialog/custom-dialog.component';
import { ElectronService } from 'ngx-electron';

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

  constructor(private dialog: MatDialog ,private electronService: ElectronService) { }

  ngOnInit() {
      this.isResized=false;
      this.appTitle='Angular-Electron';
      this.logoUrl='assets/logo.png'
      this.disableClose=false;
  }

  onMinimize(){
      if(this.electronService.isElectronApp) 
          this.electronService.remote.getCurrentWindow().minimize();
  }

  onResize(){
      this.isResized=!this.isResized;
      if(this.electronService.isElectronApp) {
          let currentWindow = this.electronService.remote.getCurrentWindow();
          if(currentWindow.isMaximized())
              currentWindow.unmaximize()
          else
              currentWindow.maximize()    
      }
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
          if(this.electronService.isElectronApp) {
              this.electronService.remote.getCurrentWindow().close();
            }
            this.disableClose = true
        }
        else
            this.disableClose = false 
      });
  }

}
