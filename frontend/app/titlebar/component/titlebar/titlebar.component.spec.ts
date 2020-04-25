import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TitlebarComponent } from './titlebar.component';
import { MenubarComponent } from '../menubar/menubar.component';
import { SharedModule } from '../../../shared/shared.module';
import { MenuitemComponent } from '../menuitem/menuitem.component';

describe('TitlebarComponent', () => {
  let component: TitlebarComponent;
  let fixture: ComponentFixture<TitlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ TitlebarComponent,
                      MenubarComponent,
                      MenuitemComponent ],
      providers : [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Refect The App title Properly', () => {
    let element = fixture.debugElement.query(By.css('#dragableRegion'));
    let el:HTMLElement = element.nativeElement;
    expect( el.innerText ).toBe(component.AppTitle);
  });
});
