import { Component,OnDestroy,ViewChild,AfterViewInit } from '@angular/core';

import { ElectronService } from 'ngx-electron';
import { Subscription } from 'rxjs';

import { MenubarComponent } from './menubar/menubar.component';
import { TabbarComponent } from './tabbar/tabbar.component';

import { DialogService } from './services/dialog.service'
import { MenuService } from './menubar/menu.service';

import { CustomDialog } from './custom-dialog/custom-dialog.component';
import { MenuTemplate } from './common/model/menu.model';
import { AppConfig } from './app.config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnDestroy{
  
    applicationTitle:string = 'Angular-Electron';
    menuitems: MenuTemplate[] = AppConfig.menuConfig;  
    menuSubscription: Subscription;

    @ViewChild(MenubarComponent,{static:true}) menuBar;

    @ViewChild(TabbarComponent,{static:true}) tabBar;

    constructor(  /* private dialog: MatDialog , */
                private dialog: DialogService,
                private electronService: ElectronService,
                private menuservice:MenuService) { }

    ngAfterViewInit() {
        this.menuSubscription = this.menuservice.getTemplate().subscribe(template => {
            if (template) {
                console.log(template);
                this.tabBar.openTab(template.label);
                //this.menuservice.clearTemplate();
                this.menuBar.collapseall();
            } 
        });      
    }

    ngOnDestroy() {
        this.menuSubscription.unsubscribe();
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
        const dialogRef = this.dialog.openDialog(CustomDialog,
            {
                height:160,
                width:300,
            },
            {
                data:
                    { 
                        message: 'Are you sure want to close the Application ?',
                        buttonText: {ok: 'Yes',cancel: 'No'},
                        dialogIconName :'warning'
                    }
            }
        );
        dialogRef.afterClosed.subscribe((confirmed: boolean) => {
            if (confirmed){
                if(this.electronService.isElectronApp) {
                    this.electronService.remote.getCurrentWindow().close();
                }
            }
        });
    }

    onMenuClick($event){
        console.log($event);
    }

}
