import { Injectable } from '@angular/core';
import { Message } from "../common/model/message.model";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  private _messageList:Message[]
  
  pushMessage(msg:Message){
    this._messageList.push(msg)
  }

  get messageList(){
    return this._messageList;
  }

  cleanMessages(){
    this._messageList=[];
  }

}
