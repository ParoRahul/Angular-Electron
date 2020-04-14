import { Component, AfterViewInit, QueryList } from '@angular/core';
import { ViewChildren, ElementRef, HostListener } from '@angular/core';
import { MenuitemComponent } from '../menuitem/menuitem.component';
import { MenuTemplate } from '../../model/menu.model';
import { menuConfig } from '../../model/menu.config';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements AfterViewInit {

  public menuConfig: MenuTemplate[] = menuConfig;

  @ViewChildren(MenuitemComponent) menus: QueryList<MenuitemComponent>;

  private menuBarExpanded: boolean;

  @HostListener('document:click', ['$event']) onClick(event: MouseEvent) {
    // console.log('From HostListener ')
    if ( ! this.elRef.nativeElement.contains(event.target)) {
        if (this.menuBarExpanded ){
            this.collapseall();
        }
    }
  }

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    // console.log(` Legth of menus ${this.menus.length}`)
    this.menuBarExpanded = false;
    this.collapseall();
  }

  onMenuBarClick(label: string) {
    // console.log(`From MenuBar: menu click for ${label}`)
    this.menuBarExpanded = true;
    this.menus.toArray().forEach(item => {
        item.expand = (item.parent === label) ? !item.expand : false;
    });
  }

  public collapseall(): void {
    // console.log(' Collapse all Called from menubar')
    this.menuBarExpanded = false;
    this.menus.toArray().forEach((item) => item.collapseMenu() );
  }

  get isMenuBarHoverd(): boolean {
    const hoverdItem = this.menus.filter((item) => item.isHovered );
    return hoverdItem.length > 0 ? true : false;
  }

}
