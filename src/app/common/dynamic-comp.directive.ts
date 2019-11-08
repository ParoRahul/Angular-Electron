import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[DynamicComponent]'
})
export class DynamicCompDirective {

  constructor(public container: ViewContainerRef) { }

}
