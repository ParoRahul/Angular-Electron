import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DynamicCompDirective } from 'src/app/shared/directive/dynamic-comp.directive';

import { NewprojectComponent } from '../newproject/newproject.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string='Home';
  isCloseable:boolean;
  active:boolean = true;

  @ViewChild(DynamicCompDirective,{static:true}) tabtemplate: DynamicCompDirective;

  constructor(private componentResolver: ComponentFactoryResolver) { }

  diplayButton:boolean = true;

  ngOnInit(): void {}

  public addProject(): void {
    const componentFactory = this.componentResolver.resolveComponentFactory(NewprojectComponent);
    const viewContainerRef = this.tabtemplate.container;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.checkNoChanges();
    this.diplayButton = false;
  }

}
