import { Injectable } from '@angular/core';
import PouchDB  from 'pouchdb';

@Injectable({
  providedIn: 'root'
})
export class SettingsDbService {
  private isInstantiated: boolean;
  settings:any;

  constructor() {
    if (!this.isInstantiated) {
      this.settings = new PouchDB('settings',
                                   { prefix: 'D:/node/angular/Angular-Electron/db'
                                   });
      PouchDB.on('created', function (dbName) {
         console.log(` Db Created for ${dbName}`)
      });  
      this.settings.info().then(function (result) {
        console.log(result);
      }).catch(function (err) {
        console.log(err);
      });                                  
      this.isInstantiated = true;
    }
  }

  public getAppSettings() {
    return this.settings.get('App_Settings')
  }

  public getLangSettings() {
    return this.settings.get('Lang_Settings')
  }

  public getDBsettings() {
    return this.settings.get('DB_Settings')
  }
}
