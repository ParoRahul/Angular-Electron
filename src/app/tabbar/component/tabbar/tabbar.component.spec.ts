import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFactoryResolver } from '@angular/core';
import { TabbarComponent } from './tabbar.component';
import { SharedModule } from 'src/app/shared/shared.module';


describe('TabbarComponent', () => {
  let component: TabbarComponent;
  let fixture: ComponentFixture<TabbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ TabbarComponent ],
      providers : []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
