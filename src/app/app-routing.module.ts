import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginoptionsComponent } from './loginoptions/loginoptions.component';


const routes: Routes = [{path:'' , component:LoginoptionsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
