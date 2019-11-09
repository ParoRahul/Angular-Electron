import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialog } from './custom-dialog.component';

describe('CustomDialogComponent', () => {
  let component: CustomDialog;
  let fixture: ComponentFixture<CustomDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
