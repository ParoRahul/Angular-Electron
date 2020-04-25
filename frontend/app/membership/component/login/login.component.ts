import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
/* import { AuthoriationService } from '../../service/authoriation.service'; */
import { DialogRef } from '../../../shared/model/dialog.ref';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public validLogin:boolean;

  constructor(/* private service:AuthoriationService, */
              public dialogRef: DialogRef)
  {
    this.validLogin=true;
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
    });
  }

  goAnnonymous(){
      console.log(this.form.value);
      this.dialogRef.close(true);
  }

  login(){
    console.log(this.form.value);
    this.dialogRef.close(true);
    /* this.service.logIn(this.form.value)
    .subscribe( result => {
      if (result){
        this.dialogRef.close(result);
      }
      else
        this.validLogin=false
    }) */
  }

  createAccount() {}


}
