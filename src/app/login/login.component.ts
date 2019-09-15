import { Component,OnInit, ɵConsole } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { UserDbService } from '../services/user-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userList:any[];
  avaiableUser:number;
  form: FormGroup;

  constructor(private service:UserDbService) { 
    
  }
  
  get username(){
    return this.form.get('username')
  }

  get password(){
    return this.form.get('password')
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('',[ Validators.required,
                                     Validators.minLength(5)]),
      password: new FormControl('',Validators.required)
    })
    /*     
    this.service.getAllUserInfo().
    then((result)=>{
      this.avaiableUser = result.total_rows;
      console.log(result);
    }).catch((err)=>{
      this.userList=[];
      this.avaiableUser =0;
    }) */
  }

  submit( ){
    this.service.getUserInfo(this.username.value)
    .subscribe(response=>{
      console.log(response)
    },(error:any)=>{
        this.form.setErrors(error);
        console.log(this.form)
   }) 
 }

}
