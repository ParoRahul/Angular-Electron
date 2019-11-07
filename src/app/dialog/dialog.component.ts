import { Component, ViewChild, OnDestroy, AfterViewInit ,ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver,Type,ComponentRef,ChangeDetectorRef } from '@angular/core';
import { InsertionDirective } from './insertion.directive'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit,OnDestroy {

  @ViewChild(InsertionDirective,{static:true})insertionPoint: InsertionDirective;

  private readonly _onClose = new Subject<any>()

  public componentRef: ComponentRef<any>
  public childComponentType: Type<any>
  public onClose = this._onClose.asObservable()


  constructor(private resolver: ComponentFactoryResolver,
              private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation()
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.resolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
}



}
