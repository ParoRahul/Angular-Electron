import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerButtonsComponent } from './corner-buttons.component';

describe('CornerButtonsComponent', () => {
  let component: CornerButtonsComponent;
  let fixture: ComponentFixture<CornerButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
