import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicCompDirective {

  constructor(public container: ViewContainerRef) { }

}
