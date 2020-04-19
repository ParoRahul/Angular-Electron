import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFactoryResolver,ViewContainerRef, Component, DebugElement, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DynamicCompDirective } from './dynamic-comp.directive';



@Component({
  template: `<div appDynamicComponent> </div>`
})
class HostComponent {
  @ViewChild(DynamicCompDirective, {static: true})insertionPoint: DynamicCompDirective;
}

@Component({
  template: `<div class="d-block m-5 bg-danger text-muted">I am Dynamicaly Loaded</div>`
})
class GuestComponent {}

describe('DynamicCompDirective', () => {
  let fixture :ComponentFixture<HostComponent>;
  let hostcomponent: HostComponent;
  let divelement:DebugElement;
  let resolver: ComponentFactoryResolver ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostComponent,
                      GuestComponent,
                      DynamicCompDirective ],
      providers : [],
    }).compileComponents();
  })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    hostcomponent = fixture.componentInstance;
    divelement = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    let container:ViewContainerRef;
    const directive = new DynamicCompDirective(container);
    expect(directive).toBeTruthy();
  });

  it('should create compoenet with DynamicCompDirective directivr', () => {
    expect(hostcomponent).toBeDefined();
  });

  it('should DynamicCompDirective instance of ViewContainerRef', () => {
     let insertionPoint=hostcomponent.insertionPoint;
     expect(insertionPoint.container).toBeInstanceOf(ViewContainerRef);
     /* let componentFactory=resolver.resolveComponentFactory(GuestComponent);
     insertionPoint.container.createComponent(componentFactory); */
  });


});
