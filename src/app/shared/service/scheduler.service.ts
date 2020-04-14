import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SchedulerData } from '../model/schedulerData';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private subject = new Subject<SchedulerData>();

  constructor() { }

  schedulerRequest(template: SchedulerData) {
    this.subject.next(template);
  }

  clearcatche() {
      this.subject.next();
  }

  serveScheduler(): Observable<any> {
      return this.subject.asObservable();
  }
}