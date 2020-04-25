import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../../../shared/service/scheduler.service';

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css']
})
export class StatusbarComponent implements OnInit {

  constructor(private scheduler: SchedulerService) { }

  ngOnInit() {
  }

}
