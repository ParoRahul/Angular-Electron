import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ElectronService } from 'ngx-electron';
import { DataTemplate } from '../common/model/data.model';

@Injectable({
  providedIn: 'root'
})
export class ElectronConnector {

  private subject = new Subject<DataTemplate>();

  constructor(public electron: ElectronService) { 

  }

  isRunningFromElectron():boolean{
    return this.electron.isElectronApp;
  }

  public putDocument(document:DataTemplate) :Observable<DataTemplate>{
    this.electron.ipcRenderer.on('insert-sucess',(event:any,item:any)=>{
        console.log(item);
        this.subject.next(item); 
    });
    this.electron.ipcRenderer.on('insert-fail',(event:any,item:any)=>{
        console.log(item);
        this.subject.next(item);
    });
    this.electron.ipcRenderer.send('document-insert',document)
    return this.subject.asObservable();
  }

  public getDocument(document:DataTemplate) :Observable<DataTemplate>{
    this.electron.ipcRenderer.on('retrival-sucess',(event:any,item:any)=>{
        this.subject.next(item); 
    });
    this.electron.ipcRenderer.on('retrival-fail',(event:any,item:any)=>{
        this.subject.next(item);
    });
    this.electron.ipcRenderer.send('document-insert',document)
    return this.subject.asObservable();
  }


}
