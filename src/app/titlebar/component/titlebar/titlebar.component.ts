import { Component, OnInit, ViewChild } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';
import { SimpleDialogComponent } from '../../../shared/component/simpleDialog/simpleDialog.component';

import { DialogService } from 'src/app/shared/service/dialog.service';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {
  private isMinimized: boolean;
  disableClose: boolean;
  private AppTitle: string = 'Angular-Electron-Demo-App';

  @ViewChild(MenubarComponent,{static:true}) menuBar;

  constructor(  private dialogService: DialogService,
                private electronService: ElectronService) { }

  ngOnInit() {
    this.isMinimized = false;
  }

  public collapseMenu():void {
    this.menuBar.collapseall();
  }

  private onMinimize(): void{
    this.isMinimized = true;
    if ( this.electronService.isElectronApp ) {
        this.electronService.remote.getCurrentWindow().minimize();
    }
  }

  private onResize():void {
    this.isMinimized = !this.isMinimized;
    if ( this.electronService.isElectronApp ) {
        const currentWindow = this.electronService.remote.getCurrentWindow();
        if (currentWindow.isMaximized() ) {
            currentWindow.unmaximize();
        } else {
            currentWindow.maximize();
        }
    }
  }

  private onClose(): void {
    this.disableClose = true;
    const dialogRef = this.dialogService.openDialog(SimpleDialogComponent,
        {
          height: 160,
          width: 300,
        },
        {
          data:
              {
                message: 'You may have unsaved work, are you \
                sure want to close the application ?',
                buttonText: {ok: 'Yes', cancel: 'No'},
                dialogIconName : 'warning'
              }
        }
    );
    dialogRef.afterClosed.subscribe((confirmed: boolean) => {
        if (confirmed){
            this.closeAppAutomatic();
        }
    });
  }

  public closeAppAutomatic():void {
    if (this.electronService.isElectronApp) {
      this.electronService.remote.getCurrentWindow().close();
    }
  }

  public isAppMinimized(): boolean {
    return this.isMinimized;
  }

  public getAppTiltle(): string {
    return this.AppTitle;
  }

}

