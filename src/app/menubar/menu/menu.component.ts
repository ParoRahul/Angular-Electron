import { Component, Input, ViewChildren, QueryList, AfterViewInit, Output,EventEmitter } from '@angular/core';
import { MenuTemplate } from '../../common/model/menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  @ViewChildren(MenuComponent) submenus: QueryList<MenuComponent>;
  
  @Input() config:MenuTemplate;
  @Input() parent:string;
  
  private hover:boolean;
  expand:boolean;
  label:string;

  constructor( private service:MenuService) { 
        
  }

  ngAfterViewInit() {
    this.label=this.config.label
    this.hover = false
    this.expand = false
  }

  get hasSubmenu():boolean{
    if (this.config.hasOwnProperty('submenu')){
      return this.config.submenu.length > 0  ? true : false
    }
    return false;
  }
  
  get hasHkey():boolean{
    return this.config.hasOwnProperty('hkey')? true:false;    
  }

  get isSeparator():boolean{
    if (this.config.hasOwnProperty('role')){
        return this.config.role=='separator' ? true : false
    }
    return false; 
  }

  get isHovered():boolean{
    if (this.hover)
        return true
    if(this.hasSubmenu){    
        let hoverItem=this.submenus.filter((item)=>item.isHovered)
        return hoverItem.length > 0 ? true:false
    }
    else
      return false;
  }

  onHoverout(){
    this.hover=false;
    this.submenus.toArray().forEach(element =>element.expand=false);
  }

  onHover(){
    this.hover=true;
    this.submenus.toArray().forEach(element => element.expand=true);
  }

  collapseMenu(){
    this.expand = false;
    this.hasSubmenu && this.submenus.toArray().forEach(item=>item.collapseMenu())
  }

  onMenuClick($event: Event){
    //console.log(`from view: item click ${this.config.label}`) 
    if ( ! this.isSeparator && ! this.hasSubmenu)
          this.service.sendTemplate(this.config);
  }
  
}