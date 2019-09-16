import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { Observable, from,throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../error/app.error';
import { NotFoundError } from '../error/notFound.error';
import { ConflictError } from '../error/conflict.error';
import { BadRequestError } from '../error/badRequest.error';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private database:any;
  constructor( dbName:string ,dbPath:string) {
      this.database = new PouchDB(dbName,{ prefix: dbPath});       
      this.database.info().then(function (result) {
        console.log(result);
      }).catch(function (err) {
        console.log(err);
      });                                  
  }

  public getAllDocument():Observable<any> {
    return from ( this.database.allDocs({include_docs: true,
                                         attachments: true})
                )
          .pipe ( map ( (response:any)=> response.rows),
                 catchError(this.handleError)
                )
  }

  public getDocument(id:string): Observable<any> {   
    return from(this.database.get(id)).pipe(
      catchError(this.handleError)
    )
  }

  public putDocument(document:any) :Observable<any>{
    return from (this.database.put(document)).pipe(
      catchError(this.handleError)
    )
  }

  public deleteDocument(id:any) :Observable<any>{
    return from (this.database.remove(id)).pipe(
      catchError(this.handleError)
    )
  }

  public CloseDb(){
    return from (this.database.close()).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error:any){
    if(error.status === 400)
      return throwError( new BadRequestError(error))
    else if (error.status === 404)
      return throwError( new NotFoundError(error))  
    else if (error.status === 409)
      return throwError( new ConflictError(error))
    else
      return throwError( new AppError(error))
  }

}
