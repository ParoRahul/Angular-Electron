import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MenuTemplate } from '../../model/menu.model';
import { SchedulerService } from '../../../shared/service/scheduler.service';
import { SchedulerData } from '../../../shared/model/schedulerData';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements AfterViewInit {

  @ViewChildren(MenuitemComponent) submenus: QueryList<MenuitemComponent>;
  @Input() config: MenuTemplate;
  @Input() parent: string;

  private hover: boolean;
  expand: boolean;
  label: string;

  constructor( private service: SchedulerService) {

  }

  ngAfterViewInit() {
    this.label = this.config.label;
    this.hover = false;
    this.expand = false;
  }

  get hasSubmenu(): boolean {
    if (this.config.hasOwnProperty('submenu')) {
      return this.config.submenu.length > 0  ? true : false;
    }
    return false;
  }

  get hasHkey(): boolean {
    return this.config.hasOwnProperty('hkey') ? true : false;
  }

  get isSeparator(): boolean {
    if (this.config.hasOwnProperty('role')) {
        return this.config.role === 'separator' ? true : false;
    }
    return false;
  }

  get isHovered(): boolean {
    if (this.hover) {
        return true;
    }
    if (this.hasSubmenu) {
        const hoverItem = this.submenus.filter((item) => item.isHovered);
        return hoverItem.length > 0 ? true : false;
    } else {
      return false;
    }
  }

  onHoverout() {
    this.hover = false;
    this.submenus.toArray().forEach(element => element.expand = false);
  }

  onHover() {
    this.hover = true;
    this.submenus.toArray().forEach(element => element.expand = true);
  }

  collapseMenu() {
    this.expand = false;
    if ( this.hasSubmenu ){
        this.submenus.toArray().forEach(item => item.collapseMenu());
    }
  }

  onMenuClick($event: Event) {
    if ( ! this.isSeparator && ! this.hasSubmenu) {
          this.service.schedulerRequest({type: 'tab', component: 'pageNotFound'});
    }
  }

}
