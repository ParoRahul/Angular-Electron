import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemComponent } from './menuitem.component';
import { SchedulerService } from '../../../shared/service/scheduler.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuTemplate } from '../../model/menu.model';

describe('MenuitemComponent', () => {
  let component: MenuitemComponent;
  let fixture: ComponentFixture<MenuitemComponent>;
  let config: MenuTemplate = {
    label: 'Project',
    role: 'Masters',
    submenu: [
        {
            label: 'New Project',
            role: 'Project',
            submenu: [{
                    label: 'Bill',
                    role: 'Purchase'},{
                    label: 'Chalan',
                    role: 'Purchase'},{
                    label: 'Line',
                    role: 'separator'},{
                    label: 'Modify Bill',
                    role: 'Purchase'},{
                    label: 'Modify Chalan',
                    role: 'Purchase'}]
        }
    ]
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[SharedModule],
       declarations: [ MenuitemComponent ],
       providers : []
    }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemComponent);
    component = fixture.componentInstance;
    component.config = config;
    component.parent = 'menubar';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
