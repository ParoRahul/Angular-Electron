import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './pageNotFound.component.html',
  styleUrls: ['./pageNotFound.component.css']
})
export class PageNotFoundComponent implements OnInit {

  title: string = 'Page Not Found';
  isCloseable: boolean;
  active: boolean = true;

  constructor() { }

  ngOnInit(): void { }

}
