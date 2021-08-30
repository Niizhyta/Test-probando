import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", pathMatch: "full", redirectTo: "/home"},
  {path: "login", redirectTo: "/login"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
