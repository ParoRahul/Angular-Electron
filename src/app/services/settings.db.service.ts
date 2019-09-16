import { Injectable } from '@angular/core';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsDbService extends DbService{
  private dbName:string;
  private dbPath:string;
  constructor() {
      super('settings','D:/node/angular/Angular-Electron/db') 
      this.dbName='settings'
      this.dbPath='D:/node/angular/Angular-Electron/db'                               
  }  

}
