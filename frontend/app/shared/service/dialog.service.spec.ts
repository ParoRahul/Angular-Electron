import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { SimpleDialogComponent } from '../component/simpleDialog/simpleDialog.component';
import { ComponentData } from '../model/component.data';
import { DialogRef } from '../model/dialog.ref';
import { element } from 'protractor';

const FakeData: ComponentData = {
  data : {
          message: 'Testing Message',
          buttonText: {ok: 'Yes', cancel: 'No'},
          dialogIconName : 'warning'
        }
}

describe('DialogService', () => {
    let service: DialogService;
    let component: SimpleDialogComponent;
    let fixture: ComponentFixture<SimpleDialogComponent>;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ SimpleDialogComponent ],
        providers : [ { provide: ComponentData, useValue: FakeData },
                      { provide: DialogRef, useClass: DialogRef }],
        /* schemas: [ NO_ERRORS_SCHEMA ], */
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDialogComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DialogService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /* it('Should Creatte PageNotFound Component',() => {
    service.openDialog(SimpleDialogComponent,{height:320,width:300},{
      data:
              {
                message: 'You may have unsaved work, are you \
                sure want to close the application ?',
                buttonText: {ok: 'Yes', cancel: 'No'},
                dialogIconName : 'warning'
              }
    });
    expect(component).toBeTruthy();
    // const element: app-simple-dialog = DOM.nativeElement
  }); */


});
