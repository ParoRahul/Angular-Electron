import { Type } from '@angular/core';

export class TabContents {
  constructor(public component: Type<any>, public data: any) {}
}