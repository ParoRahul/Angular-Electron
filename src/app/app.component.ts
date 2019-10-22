import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ElectronService } from 'ngx-electron';
import { CustomDialog } from './custom-dialog/custom-dialog.component';
import { Menu } from './common/model/app.config.model';
import { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  applicationTitle:string = 'Angular-Electron';
  menuitems: Menu[] = AppConfig.menuConfig;  

  
  constructor(  private dialog: MatDialog ,
                private electronService: ElectronService) { 
                }
  
  onMinimize(){
      if(this.electronService.isElectronApp) 
            this.electronService.remote.getCurrentWindow().minimize();
  }
  
  onResize(){
      if( this.electronService.isElectronApp) {
          let currentWindow = this.electronService.remote.getCurrentWindow();
          if(currentWindow.isMaximized())
              currentWindow.unmaximize()
          else
              currentWindow.maximize()    
      }
  }
  
  onClose(){
      const dialogRef = this.dialog.open(CustomDialog,{
          disableClose: true,
          data:{  message: 'Are you sure want to close the Application ?',
                  buttonText: {ok: 'Yes',cancel: 'No'},
                  dialogIconName :'warning'}
                });

      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
              if (confirmed){
                  if(this.electronService.isElectronApp) {
                      this.electronService.remote.getCurrentWindow().close();
                  }
              }
      });
      
  }

}
