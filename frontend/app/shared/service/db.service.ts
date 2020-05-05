import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';

import { Connection, ConnectionOptions, createConnection} from 'typeorm';


@Injectable({
  providedIn: 'root'
})
export class DBService {

  private options:ConnectionOptions;
  public connection: Connection;

  public get isElectronApp(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    this.options = {
        type: 'sqlite',
        database: 'D:/out/make3d/AngularElectron.db',
        entities: [ Project ],
        synchronize: true,
        logging: ['error'],
    };
  }

  public OpenDatabase(): boolean|Error {
    if ( !this.isElectronApp){
        this.connection = null;
        return false
    }
    createConnection(this.options).then((connection) => {
      console.log('Connection Found');
      this.connection = connection;
      return true
    }).catch(( error:Error ) => {
      console.log('Connection Error');
      console.log(error)
      this.connection = null;
      return error
    });
  }

  public get isConnected(): boolean {
    return this.connection.isConnected;
  }

  public CloseDatabase(){
    return this.connection.close();
  }

  public addProject(project: Project): Promise<Project> {
      return this.connection.getRepository(Project).save(project);
  }
}
