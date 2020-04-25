import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { SchedulerService } from './shared/service/scheduler.service';
import { DialogService } from './shared/service/dialog.service';
import { TitlebarModule } from './titlebar/titlebar.Module';
import { StatusbarModule } from './statusbar/statusbar.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { TabbarModule } from './tabbar/tabbar.module';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let schedulerservice: SchedulerService;
  let dialogservice: DialogService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        TitlebarModule,
        StatusbarModule,
        ToolbarModule,
        TabbarModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: SchedulerService, useClass: SchedulerService },
        { provide: DialogService, useClass: DialogService }
      ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    schedulerservice = TestBed.inject(SchedulerService);
    dialogservice = TestBed.inject(DialogService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });


});
