import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';

import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { AuthenticationGuard } from './Authguard/authentication.guard';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path :'',redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'resetpassword', component:ResetPasswordComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  canActivate:[AuthenticationGuard],
  children:[
    {path:'notes',component:GetAllNotesComponent},
    {path:'trash',component:TrashComponent},
    {path:'archive',component:ArchiveComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
