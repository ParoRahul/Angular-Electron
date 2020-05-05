import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';
/* import { SimpleDialogComponent } from '../../../shared/component/simpleDialog/simpleDialog.component';

import { DialogService } from '../../../shared/service/dialog.service'; */
import { ElectronService } from '../../../shared/service/electron.service';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {
  private isMinimized: boolean;
  public disableClose: boolean;
  private _AppTitle: string = 'Angular-Electron-Demo-App';
  @Output() AppClose = new EventEmitter(false);

  @ViewChild(MenubarComponent,{static:true}) menuBar;

  constructor(  /* private dialogService: DialogService, */
                private electronService: ElectronService) { }

  ngOnInit() {
    this.isMinimized = false;
  }

  public get isAppMinimized(): boolean {
    return this.isMinimized;
  }

  public get AppTitle(): string {
    return this._AppTitle;
  }

  public collapseMenu():void {
    this.menuBar.collapseall();
  }

  public onMinimize(event: MouseEvent): void{
    this.isMinimized = true;
    if ( this.electronService.isElectronApp ) {
        this.electronService.remote.getCurrentWindow().minimize();
    }
  }

  public onResize(event: MouseEvent):void {
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

  public onClose(event: MouseEvent): void {
    if (this.electronService.isElectronApp)
          this.AppClose.emit();
  }

  /* public onClose(event: MouseEvent): void {
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
  } */

  public closeAppAutomatic():void {
    if (this.electronService.isElectronApp) {
      this.electronService.remote.getCurrentWindow().close();
    }
  }


}

