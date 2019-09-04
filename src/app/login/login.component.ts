import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',[ Validators.required,
                                   Validators.minLength(5)]),
    password: new FormControl('',Validators.required)
  })

  constructor() { }
  
  get username(){
    return this.form.get('username')
  }

  get password(){
    return this.form.get('password')
  }

  ngOnInit() {
  }

}
