import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { DynamicCompDirective } from '../../common/dynamic-comp.directive';
import { TabScheduler } from '../../services/tab.scheduler.service';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @ViewChild(DynamicCompDirective,{static:true}) tabContent: DynamicCompDirective;

  @Input() title:string;

  isCloseable:boolean;

  active:boolean; 

  constructor(private resolver: ComponentFactoryResolver,
              private tabScheduler:TabScheduler) { }

  ngOnInit() {
      let component = this.tabScheduler.getComponent(this.title).component;
      let componentFactory = this.resolver.resolveComponentFactory(component);
      let viewContainerRef = this.tabContent.container;
      let componentRef = viewContainerRef.createComponent(componentFactory);
  }


}
