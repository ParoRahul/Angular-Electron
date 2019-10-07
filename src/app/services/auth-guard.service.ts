import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthoriationService } from './authoriation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router, 
               private authService: AuthoriationService ) { }
  
  canActivate(){
    console.log('From Auth Gaurd');
    if (this.authService.isloggedin())
        return true;
    console.log('From Auth Gaurd else');    
    this.router.navigate(['']);
    return false;
  }
}
