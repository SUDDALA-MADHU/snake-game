import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ConfirmotpComponent } from './confirmotp/confirmotp.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "register" , component : RegisterComponent},
  {path :"home",component:DashboardComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path :"forgotpassword",component:ForgotpasswordComponent},
  {path : "confirmotp",component:ConfirmotpComponent},
  {path : "resetpassword",component : ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
