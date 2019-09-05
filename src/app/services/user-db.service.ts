import { Injectable } from '@angular/core';
import PouchDB  from 'pouchdb';

@Injectable({
  providedIn: 'root'
})
export class UserDbService {

  private isInstantiated: boolean;
  userInfo:any;

  constructor() {
    if (!this.isInstantiated) {
      this.userInfo = new PouchDB('App_User',{ prefix: 'D:/node/angular/Angular-Electron/db'});
       
      this.userInfo.info().then(function (result) {
        console.log(result);
      }).catch(function (err) {
        console.log(err);
      });                                  
      this.isInstantiated = true;
    }
  }

  public getAllUserInfo() {
    return this.userInfo.allDocs({include_docs: true});
  }

}
