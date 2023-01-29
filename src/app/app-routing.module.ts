import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelocmePageComponent } from './components/welocme-page/welocme-page.component';


const routes: Routes = [
    {path:'',component:WelocmePageComponent},
    {path:'home',component:HomeComponent},
    {path:'logIn',component:LoginComponent},
    {path:'signUp',component:RegisterComponent}
   ];

   @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }



