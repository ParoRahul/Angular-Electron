import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [  
                          { path:'' , component:HomeComponent },
                          { path:'createAccount' ,
                            component:SignupComponent,
                            canActivate:[AuthGuard] } 
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
