import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginoptionsComponent } from './loginoptions.component';

describe('LoginoptionsComponent', () => {
  let component: LoginoptionsComponent;
  let fixture: ComponentFixture<LoginoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
