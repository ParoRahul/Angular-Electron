import { Component, Input, AfterViewInit, QueryList, ViewChildren,ElementRef, HostListener } from '@angular/core';
import { MenuTemplate } from '../common/model/menu.model';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements AfterViewInit {

  @HostListener('document:click',['$event']) onClick(event:MouseEvent){
    //console.log('From HostListener ')
    if ( ! this.elRef.nativeElement.contains(event.target))
        this.menuBarExpanded && this.collapseall() 
  }

  @Input() menuConfig:MenuTemplate[];

  @ViewChildren(MenuComponent) menus: QueryList<MenuComponent>;

  private menuBarExpanded:boolean;

  constructor(private elRef:ElementRef) { 
    
  }

  ngAfterViewInit() {
    //console.log(` Legth of menus ${this.menus.length}`)
    this.menuBarExpanded=false;
    this.collapseall();
  }

  onMenuBarClick(label:string){
    //console.log(`From MenuBar: menu click for ${label}`)
    this.menuBarExpanded=true;
    this.menus.toArray().forEach(item=>{
          item.expand= (item.parent==label)? !item.expand:false;
    });
  } 
  
  collapseall():void{
    //console.log(' Collapse all Called from menubar')
    this.menuBarExpanded=false
    this.menus.toArray().forEach((item)=>item.collapseMenu())
  }

  get isMenuBarHoverd():boolean{
    let hoverdItem=this.menus.filter((item)=>item.isHovered)
    return hoverdItem.length > 0 ? true:false
  }

}