import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LoanComponent } from './loan/loan.component';


const appRoutes: Routes = [
  {
    path :'',
    component: LoginComponent
  },
  { 
    path: 'login', 
    component: LoginComponent },
  {
    path :'loan',
    component: LoanComponent
  },
  { 
    path: 'register', 
    component: RegistrationComponent 
  }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
