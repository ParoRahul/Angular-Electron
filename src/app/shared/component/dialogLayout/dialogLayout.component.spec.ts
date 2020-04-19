import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';
import { DialogLayoutComponent } from './dialogLayout.component';
import { DialogRef } from '../../model/dialog.ref';

describe('DialogLayoutComponent', () => {
  let component: DialogLayoutComponent;
  let fixture: ComponentFixture<DialogLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLayoutComponent ],
      providers: [ { provide: DialogRef, useClass: DialogRef } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
