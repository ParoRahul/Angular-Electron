import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MenuTemplate } from '../common/model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private subject = new Subject<MenuTemplate>();

  constructor() { }

  sendTemplate(template: MenuTemplate) {
    this.subject.next(template);
  }

  clearTemplate() {
      this.subject.next();
  }

  getTemplate(): Observable<any> {
      return this.subject.asObservable();
  }

}
