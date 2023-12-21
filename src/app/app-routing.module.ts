import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListofTodosComponent } from './listof-todos/listof-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path: '', component:LoginComponent},
  {path: 'todos', component:ListofTodosComponent, canActivate:[RouteGuardService]},
  {path: 'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
