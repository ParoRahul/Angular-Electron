import PouchDB from 'pouchdb';

import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, from,throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthoriationService {
  private database:any;
  

  constructor() { 
    this.database = new PouchDB('App_User',
    { 
      prefix: 'D:/node/angular/Angular-Electron/db',
      auto_compaction: true,    // Only store latest records
    }); 
    //this.validLogin=true;
    /* this.database.info().then(function (result) {
      console.log(result);
    }).catch(function (err) {
      console.log(err);
    }); */     
  }
  
  public logIn(credentials) :Observable<any>{
    return from(this.database.get(credentials.username)).pipe(
     map ( function(response:any):Boolean{ 
          if(response.password == credentials.password){
            this.validLogin=true;          
            localStorage.setItem('token',response);
            return true;
          }          
          this.validLogin=false;
          return false;
     })
    )  
    /* this.database.get(credentials.username)
    .then((response)=>{
        if(response.password == credentials.password){
          this.validLogin=true;          
          localStorage.setItem('token',response);
        }
        else{
          this.validLogin=false;
        }
    }).catch((error)=>{
        console.log(error)
        this.validLogin=false;
    }) */
  }

  public logout(){
    localStorage.removeItem('token');
  }

  public isloggedin():Boolean{
    let token = localStorage.getItem('token');
    if (!token)
        return false; 
    return true;    
    /* let jwthelper = new JwtHelperService();
    let expirationDate=jwthelper.getTokenExpirationDate(token);
    let isExpiared = jwthelper.isTokenExpired(token);
    console.log(`Expiration date ${expirationDate} and flag ${isExpiared}`);
    return !isExpiared; */
  }

  public annonymousLogIn(){
    let token = localStorage.getItem('token');
    if (token)
      localStorage.removeItem('token');
    token=JSON.stringify({
        username:'Annonymous',
        password:'Password',
        role:'resticted'
    });
    localStorage.setItem('token',token);
  }

  get currentUser():any {
    let currentUser= localStorage.getItem('token');
    if(!currentUser){
        return;
    }
    else{
        return JSON.parse(currentUser);
    }
  }

}