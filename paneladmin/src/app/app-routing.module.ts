import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { DashboardaComponent } from './Admin/dashboarda/dashboarda.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './User/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"prof",
    component:ProfileComponent
  },
  {
    path:"dashboarda",
    component:DashboardaComponent
  }
  ,
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
 
  {
    path:"dashboardu",
    component:DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
