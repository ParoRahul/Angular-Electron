import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { Observable, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../error/app.error';
import { NotFoundError } from '../error/notFound.error';
import { ConflictError } from '../error/conflict.error';

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

  public getAllUserInfo():Observable<any> {
    return from (
                  this.userInfo.allDocs({include_docs: true})
                  .catch((error)=>{
                    return Observable.throw( new AppError(error))
                  })
                )
  }

  public getUserInfo(userName:string): Observable<any> {   
    return from(this.userInfo.get(userName).pipe(
      catchError((error:any)=>{
        console.log('dfdsfsdf')
        if(error.status === 404){
          return Observable.throw( new NotFoundError(error))
        }
        else if (error.status === 409){
          console.log('409')
          return Observable.throw( new ConflictError(error))
        }
        else{
          return Observable.throw( new AppError(error))
        }
      })
    )
    )
  }

  public putUserInfo(userInfo) :Observable<any>{
    return from (this.userInfo.put(userInfo)).pipe(
      catchError((error:any)=>{
        if(error.status === 404)
          return Observable.throw( new NotFoundError())
        else if (error.status === 409){
          console.log(error)
          return Observable.throw( new ConflictError())
        }
        else
          return Observable.throw( new AppError(error))
        
      })
    )
  }

}
