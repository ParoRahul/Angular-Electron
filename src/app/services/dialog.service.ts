import { Injectable,ComponentFactoryResolver,ApplicationRef } from '@angular/core';
import { Injector,EmbeddedViewRef,ComponentRef,Type } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

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

  appendDialogToBody(){
    const componentFactory = this.resolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.dialogComponentRef = componentRef;
  }

  private removeDialogFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  public openDialog(componentType: Type<any>) {
    this.appendDialogToBody();
    this.dialogComponentRef.instance.childComponentType = componentType;
  }
}
