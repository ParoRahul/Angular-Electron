import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { AuthoriationService } from '../services/authoriation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userList:any[];
  avaiableUser:number;
  form: FormGroup;
  public validLogin:boolean;
  constructor(private service:AuthoriationService,
              private router: Router ,
              private route: ActivatedRoute ) { 
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
    })    
  }

  goAnnonymous(){
      console.log(this.form.value);
  }

  createAccount(){
    console.log(this.form.value);
    this.service.logIn(this.form.value)
    .subscribe( result => {
      if (result){
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
        this.router.navigate([returnUrl||'home'])
        this.validLogin=true
      }
      else
        this.validLogin=false
    })
  }

}
