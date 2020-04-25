import { Injectable, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { Injector, EmbeddedViewRef, ComponentRef, Type } from '@angular/core';
import { DialogLayoutComponent } from '../component/dialogLayout/dialogLayout.component';
import { ComponentData } from '../model/component.data';
import { DataInjector } from '../model/data.injector';
import { DialogRef } from '../model/dialog.ref';
import { DialogStyle } from '../model/dialog.style';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogComponentRef: ComponentRef<DialogLayoutComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  private appendDialogToBody(data: ComponentData, style: DialogStyle){
    const map = new WeakMap();
    map.set(ComponentData, data);

    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    const sub = dialogRef.afterClosed.subscribe(() => {
      // close the dialog
      this.removeDialogFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.resolver.resolveComponentFactory(DialogLayoutComponent);
    const componentRef = componentFactory.create(new DataInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.dialogComponentRef = componentRef;
    this.dialogComponentRef.instance.dialogHeight = style.height;
    this.dialogComponentRef.instance.dialogWidth = style.width;
    this.dialogComponentRef.instance.onClose.subscribe(() => {
        this.removeDialogFromBody();
    });

    return dialogRef;
  }

  private removeDialogFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  public openDialog(componentType: Type<any>,
                    style: DialogStyle,
                    data: ComponentData): DialogRef {
    const dialogRef = this.appendDialogToBody(data, style);
    this.dialogComponentRef.instance.childComponentType = componentType;
    return dialogRef;
  }
}
