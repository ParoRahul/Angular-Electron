import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from "../common/model/message.model"

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css']
})
export class StatusbarComponent implements OnInit {
  

  constructor(msgService:MessageService) { }

  ngOnInit() {
  }

}
