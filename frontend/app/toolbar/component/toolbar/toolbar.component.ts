import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../../../shared/service/scheduler.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private scheduler: SchedulerService) { }

  ngOnInit() {

  }

  onLogIn(){
    this.scheduler.schedulerRequest({type: 'dialog', component: 'login'});
  }

  onApplySettings(){

  }

}
