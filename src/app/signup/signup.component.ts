import { Component, OnInit } from '@angular/core';
import { UserDbService } from '../services/user.db.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    name: new FormControl('',[ Validators.required,Validators.minLength(5)]),
    username: new FormControl('',[ Validators.required,Validators.minLength(5)]),
    password: new FormControl('',Validators.required),
    confirmPaswd: new FormControl('',Validators.required)
  })

  constructor(private service:UserDbService) { 
    this.signedUpSucessfully=false;
  }
  
  get name(){
    return this.form.get('name')
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
    this.service.getAllDocument()
    .subscribe(response=>{
      console.log(response)
    })
  }

  submit( ){
    this.service.putDocument({ _id:this.form.get('username').value,
                              name:this.form.get('name').value,
                              password:this.form.get('password').value
    }).subscribe(response=>{
        console.log(response);
        this.signedUpSucessfully=true
    },(error: AppError)=>{
      if(error instanceof ConflictError){
         //this.form.setErrors(error.originalError);
         alert ("User id Already exists")
      }
      else if(error instanceof BadRequestError){
        //this.form.setErrors(error.originalError);
        alert (" Bad  Request")
     }
     else throw error;
    }) 
 }

}
