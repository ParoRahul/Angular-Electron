import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ElectronService } from './service/electron.service';

import { SchedulerService } from './service/scheduler.service';
import { DialogService } from './service/dialog.service';

import { DialogLayoutComponent } from './component/dialogLayout/dialogLayout.component';
import { SimpleDialogComponent } from './component/simpleDialog/simpleDialog.component';
import { PageNotFoundComponent } from './component/pageNotFound/pageNotFound.component';

import { DynamicCompDirective } from './directive/dynamic-comp.directive';

@NgModule({
  declarations: [ DialogLayoutComponent,
                  SimpleDialogComponent,
                  PageNotFoundComponent,
                  DynamicCompDirective ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ SchedulerService,
               DialogService,
               ElectronService],
  exports: [ /* Anguler Module Exports */
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            /* Custom Directive Exports */
            DynamicCompDirective,
            /* Custom Component Exports */
            SimpleDialogComponent,
            PageNotFoundComponent,
            /* Custom Service Exports */
  ],
  entryComponents: [ DialogLayoutComponent ]
})
export class SharedModule { }
