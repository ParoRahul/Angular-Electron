import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
/* import { UserDbService } from '../services/user.db.service'; */
import { ElectronConnector } from '../services/electron.service';
import { DataTemplate } from '../common/model/data.model';
import { AppError } from '../error/app.error';
import { ConflictError } from '../error/conflict.error';
import { BadRequestError } from '../error/badRequest.error';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userList:any[];

  avaiableUser:number;

  signedUpSucessfully:boolean;

  form = new FormGroup({
    username: new FormControl('',[ Validators.required,Validators.minLength(5)]),
    password: new FormControl('',Validators.required),
    confirmPaswd: new FormControl('',Validators.required)
  })

  constructor(private service:ElectronConnector) { 
    this.signedUpSucessfully=false;
  }
  
  get username(){
    return this.form.get('username')
  }

  get password(){
    return this.form.get('password')
  }

  get confirmPaswd(){
    return this.form.get('confirmPaswd')
  }

  ngOnInit() {
    /* this.service.getAllDocument()
    .subscribe(response=>{
      console.log(response)
    }) */
  }

  
  submit( ):void{
      if (this.service.isRunningFromElectron() ){      
        let document:DataTemplate ={
                  schema: 'user',
                  id :this.form.get('username').value,
                  document : { _id:this.form.get('username').value,
                              password:this.form.get('password').value
                            }
                  }          
        this.service.putDocument(document).subscribe(response=>{
              console.log(response);
              this.signedUpSucessfully=true
        }); 
      }
  }

}
