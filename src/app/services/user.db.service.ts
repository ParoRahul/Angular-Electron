import { Injectable } from '@angular/core';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class UserDbService extends DbService{
  private dbName:string;
  private dbPath:string;
  constructor() {
      super('App_User','D:/node/angular/Angular-Electron/db') 
      this.dbName='App_User'
      this.dbPath='D:/node/angular/Angular-Electron/db'                                 
  }
}
