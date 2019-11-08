import { Injectable,ComponentFactoryResolver,ApplicationRef } from '@angular/core';
import { Injector,EmbeddedViewRef,ComponentRef,Type } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { ComponentData } from '../common/component.data';
import { DataInjector } from '../common/data.injector';
import { DialogRef } from '../dialog/dialog.ref';
import { DialogStyle } from '../dialog/dialog.style';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogComponentRef: ComponentRef<DialogComponent>

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendDialogToBody(data: ComponentData, style:DialogStyle){
    const map = new WeakMap();
    map.set(ComponentData, data);

    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    const sub = dialogRef.afterClosed.subscribe(() => {
      // close the dialog
      this.removeDialogFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.resolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(new DataInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.dialogComponentRef = componentRef;
    this.dialogComponentRef.instance.dialogHeight=style.height;
    this.dialogComponentRef.instance.dialogWidth=style.width;
    this.dialogComponentRef.instance.onClose.subscribe(() => {
        this.removeDialogFromBody();
    });

    return dialogRef;
  }

  private removeDialogFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  public openDialog(componentType: Type<any>,style:DialogStyle,data: ComponentData) {
    this.appendDialogToBody(data,style);
    this.dialogComponentRef.instance.childComponentType = componentType;
  }
}
