import { Component, ViewChild, OnDestroy, AfterViewInit  } from '@angular/core';
import { ComponentFactoryResolver, Type, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';

import { DynamicCompDirective } from '../../directive/dynamic-comp.directive';
import { DialogRef } from '../../model/dialog.ref';

@Component({
  selector: 'app-dialog-layout',
  templateUrl: './dialogLayout.component.html',
  styleUrls: ['./dialogLayout.component.css']
})
export class DialogLayoutComponent implements AfterViewInit, OnDestroy {

  @ViewChild(DynamicCompDirective, {static: true})insertionPoint: DynamicCompDirective;

  dialogHeight: number;
  dialogWidth: number;
  backDrop: boolean = false;

  public componentRef: ComponentRef<any>;
  public childComponentType: Type<any>;

  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();


  constructor(private resolver: ComponentFactoryResolver,
              private cd: ChangeDetectorRef,
              private dialogRef: DialogRef) { }

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
    if (this.backDrop) {
      this.dialogRef.close();
    }
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation()
  }

  loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.resolver.resolveComponentFactory(componentType);
    const viewContainerRef = this.insertionPoint.container;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  close() {
    this._onClose.next();
  }

}
