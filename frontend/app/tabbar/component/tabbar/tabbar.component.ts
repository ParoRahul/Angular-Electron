import { Component, OnInit,ViewChild,ComponentFactoryResolver } from '@angular/core';
import { DynamicCompDirective } from '../../../shared/directive/dynamic-comp.directive';
import { HomeComponent } from '../../component/home/home.component';
import { TabContents } from '../../model/tabContent';

import { DialogService } from '../../../shared/service/dialog.service';
import { SimpleDialogComponent } from '../../../shared/component/simpleDialog/simpleDialog.component';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {

  dynamicTabs:any[] = [];

  @ViewChild(DynamicCompDirective,{static:true}) tabtemplate: DynamicCompDirective;

  constructor(  private resolver: ComponentFactoryResolver,
                private dialogService: DialogService,) { }

  ngOnInit() {
    const componentFactory = this.resolver.resolveComponentFactory(HomeComponent);
    const viewContainerRef = this.tabtemplate.container;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    /* const instance: HomeComponent = componentRef.instance as HomeComponent; */
    componentRef.instance.isCloseable=false;
    componentRef.instance.active=true;
    this.dynamicTabs.push(componentRef.instance);
  }

  openTab(tabContent: TabContents ){
    console.log('OpenTab called')
    const componentFactory = this.resolver.resolveComponentFactory(tabContent.component);
    const viewContainerRef = this.tabtemplate.container;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    // const instance: TabComponent = componentRef.instance as tabContent.component;
    componentRef.instance.isCloseable=true;
    this.dynamicTabs.push(componentRef.instance );
    this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
  }

  selectTab(tab:any){
    // console.log(` tab title is ${tab.title}`)
    this.dynamicTabs.forEach(item=>{
        // console.log(` item title is ${item.title}`)
        if (item.title == tab.title){
            item.active=true
        } else {
          item.active=false
        }
    });
  }

  closeTab(tab:any){
    const dialogRef = this.dialogService.openDialog(SimpleDialogComponent,
      {
        height: 160,
        width: 300,
      },
      {
        data:
            {
              message: 'You may have unsaved work, are you \
              sure want to close the Current Tab ?',
              buttonText: {ok: 'Yes', cancel: 'No'},
              dialogIconName : 'warning'
            }
      }
  );
  dialogRef.afterClosed.subscribe((confirmed: boolean) => {
    if (confirmed){
        for (let i = 0; i < this.dynamicTabs.length; i++) {
          if (this.dynamicTabs[i] === tab) {
              this.dynamicTabs.splice(i, 1);
              const viewContainerRef = this.tabtemplate.container;
              viewContainerRef.remove(i);
              this.selectTab(this.dynamicTabs[0]);
              break;
          }
        }
      }
    });
  }

  closeTabFrictionLess(tab:any){
    for (let i = 0; i < this.dynamicTabs.length; i++) {
      if (this.dynamicTabs[i] === tab) {
          this.dynamicTabs.splice(i, 1);
          const viewContainerRef = this.tabtemplate.container;
          viewContainerRef.remove(i);
          this.selectTab(this.dynamicTabs[0]);
          break;
      }
    }
  }

}
