import { Component, OnInit, Output } from '@angular/core';
import { UserDbService } from '../services/user-db.service'; 

@Component({
  selector: 'app-loginoptions',
  templateUrl: './loginoptions.component.html',
  styleUrls: ['./loginoptions.component.css']
})
export class LoginoptionsComponent implements OnInit {
  userList:any[];
  avaiableUser:number;
  
  @Output() loginoption:string;

  constructor(service:UserDbService) {
    service.getAllUserInfo().then((result)=>{
            this.avaiableUser = result.total_rows;
            console.log(result);
        }).catch((err)=>{
            this.userList=[];
            this.avaiableUser =0;
        })
  }

  ngOnInit() {
  }

  submit(f){
     console.log(f)
  }

}
