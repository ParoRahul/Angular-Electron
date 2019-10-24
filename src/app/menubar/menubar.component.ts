import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Menu } from '../common/model/app.config.model';;

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Input() menuConfig:Menu[];
  @Output() menuClicked = new EventEmitter<Menu>();

  constructor() { }

  ngOnInit() {
  }

  hasSubmenu(menu:Menu) :boolean{
    if (menu.hasOwnProperty('submenu'))
        return menu.submenu.length > 0
    return false    
  }

  onMenuClick(menu:Menu){
    console.log(menu)
    if(menu.role==='separator')
        return; 
    if (this.hasSubmenu(menu)) 
        return;   
    this.menuClicked.emit(menu)
  }

  styleMenuTitle(menu:Menu){
    if(menu.role==='separator')
      return {
        'margin':'0',
        'padding':'0 4px',
        'width':'250px',
        'height':'1px',
        'background-color':'#555',
        'z-index':'inherit'
      }
    else
      return {
        'margin':'0',
        'padding':'0',
        'width':'250px',
        'height':'24px',
        'background-color': menu.expanded ? '#666':'#555',
        'box-shadow':'0 4px 4px #111',
        'z-index':'inherit'
      }
  }

  styleSubmenu(menu:Menu){
    return {
      'width':'250px',
      'left':'250px',
      'top': '-24px',
      'box-shadow':'0 4px 4px #111',
      'visibility':menu.expanded ? 'visible':'hidden',
      'z-index':'inherit'
    }
  }

  styleSeperator(){
    return {
      'margin':'0',
      'padding':'0',
      'height':'1px',
      'broder':'0',
      'background':'#999'
    }
  }

}
