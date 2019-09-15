import { Component, OnInit } from '@angular/core';
import { Message } from "../common/model/message.model"
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messagebar',
  templateUrl: './messagebar.component.html',
  styleUrls: ['./messagebar.component.css']
})
export class MessagebarComponent implements OnInit {
  message:string;
  type:string;
  constructor(private service:MessageService) { }

  ngOnInit() {
    this.message=""
    this.type=""
    this.service.messageList.subscribe(response=>{
      this.message=response.message
      this.type=response.type
    },error=>{
      console.log(error)
    })
  }

}
