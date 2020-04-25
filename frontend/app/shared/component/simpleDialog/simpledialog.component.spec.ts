import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA,inject } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SimpleDialogComponent } from './simpleDialog.component';
import { DialogRef } from '../../model/dialog.ref';
import { ComponentData } from '../../model/component.data';

const FakeData: ComponentData = {
  data : {
          message: 'Testing Message',
          buttonText: {ok: 'Yes', cancel: 'No'},
          dialogIconName : 'warning'
        }
}

describe('SimpleDialogComponent', () => {
  let component: SimpleDialogComponent;
  let fixture: ComponentFixture<SimpleDialogComponent>;
  let dialogRef:DialogRef;
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
    // dialogRef = TestBed.inject(DialogRef);
    dialogRef = fixture.debugElement.injector.get(DialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'should have Message Text Area ', () => {
    const div = fixture.debugElement.query(By.css('#msgText'));
    const divele:HTMLDivElement =  div.nativeElement;
    expect(divele).toBeTruthy();
  });

  it( 'should have Message Text <Testing Message> ', () => {
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('#msgText'));
    const divele:HTMLDivElement =  div.nativeElement;
    expect(divele.innerText).toBe('Testing Message');
  });

  it( 'should have At least two Button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length >= 2).toBeTruthy();
  });

  it( 'should have Button name  Yes & NO ', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const ele1:HTMLButtonElement =  buttons[0].nativeElement;
    const ele2:HTMLButtonElement =  buttons[1].nativeElement;
    expect(['Yes','No']).toContain(ele1.innerText );
    expect(['Yes','No']).toContain(ele2.innerText );
  });

  it( 'should subscribe True when clicked on Confirm Button ', () => {
    const button = fixture.debugElement.query(By.css('#confirmButton'));
    const buttonele:HTMLButtonElement =  button.nativeElement;
    dialogRef.afterClosed.subscribe((status: boolean) => {
      expect(status).toBeTruthy();
    });
    buttonele.click();
    fixture.detectChanges();
  });

  it( 'should subscribe False when clicked on cancel Button ', () => {
    const button = fixture.debugElement.query(By.css('#cancelButton'));
    const buttonele:HTMLButtonElement =  button.nativeElement;
    dialogRef.afterClosed.subscribe((status: boolean) => {
      expect(status).toBeFalsy();
    });
    buttonele.click();
    fixture.detectChanges();
  });

});
