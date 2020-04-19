import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SchedulerService } from './shared/service/scheduler.service';
import { DialogService } from './shared/service/dialog.service';

import { TabbarComponent } from './tabbar/component/tabbar/tabbar.component';
import { TitlebarComponent } from './titlebar/component/titlebar/titlebar.component';
import { SimpleDialogComponent } from './shared/component/simpleDialog/simpleDialog.component';
import { PageNotFoundComponent } from './shared/component/pageNotFound/pageNotFound.component';

import { LoginComponent } from './membership/component/login/login.component';

import { SchedulerData } from './shared/model/schedulerData';
import { TabContents } from './tabbar/model/tabContent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {

    private schedulerSubscription: Subscription;

    @ViewChild(TabbarComponent,{static:true}) tabBar;

    @ViewChild(TitlebarComponent,{static:true}) titleBar;

    constructor(  private schedulerService: SchedulerService,
                  private dialogService: DialogService ) { }

    ngAfterViewInit() {
        this.schedulerSubscription = this.schedulerService.serveScheduler().
        subscribe(template => {
            if (template) {
                if (template.type === 'dialog') {
                    this.scheduleDialog(template);
                } else {
                    this.scheduleTab(template);
                }
                this.titleBar.collapseMenu();
            }
        });
    }

    ngOnDestroy() {
        this.schedulerSubscription.unsubscribe();
    }

    private scheduleDialog(template: SchedulerData): void {
        if (template.component === 'newProject') {
            console.log(template);
        }
        if (template.component === 'login') {
            this.onLogIn()
        }
    }

    private scheduleTab(template: SchedulerData): void {
        if (template.component == 'pageNotFound'){
            this.tabBar.openTab(new TabContents(PageNotFoundComponent,{}));
        }
    }

    private onLogIn() {
        const dialogRef = this.dialogService.openDialog(LoginComponent,{
            height:320,
            width:300
        },{})
        dialogRef.afterClosed.subscribe( result => {
            console.log(result);
        });
    }

}
