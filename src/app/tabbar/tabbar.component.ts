import { Component, OnInit,ViewChild,ComponentFactoryResolver } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { DynamicCompDirective } from '../common/dynamic-comp.directive';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {

  dynamicTabs:TabComponent[] = [];

  @ViewChild(DynamicCompDirective,{static:true}) tabtemplate: DynamicCompDirective;
  
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    let componentFactory = this.resolver.resolveComponentFactory(TabComponent);
    let viewContainerRef = this.tabtemplate.container;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance: TabComponent = componentRef.instance as TabComponent;
    instance.title = 'Home';
    instance.isCloseable=false;
    instance.active=true;
    this.dynamicTabs.push(componentRef.instance as TabComponent);
  }

  openTab(title: string){
    console.log('OpenTab called')
    let componentFactory = this.resolver.resolveComponentFactory(TabComponent);
    let viewContainerRef = this.tabtemplate.container;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance: TabComponent = componentRef.instance as TabComponent;
    instance.title = title;
    instance.isCloseable=true;
    this.dynamicTabs.push(componentRef.instance as TabComponent);
    this.selectTab(this.dynamicTabs[this.dynamicTabs.length -1])
  }

  selectTab(tab:TabComponent){
    //console.log(` tab title is ${tab.title}`)
    this.dynamicTabs.forEach(item=>{
      //console.log(` item title is ${item.title}`)
      if (item.title == tab.title){
          item.active=true
      }
      else{
        item.active=false
      } 
    })
  }

  closeTab(tab:TabComponent){
    for (let i = 0; i < this.dynamicTabs.length; i++) {
      if (this.dynamicTabs[i] === tab) {
          this.dynamicTabs.splice(i, 1);
          let viewContainerRef = this.tabtemplate.container;
          viewContainerRef.remove(i);
          this.selectTab(this.dynamicTabs[0]);
          break;
      }
    }
  }

}
