import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { FullwidthComponent } from './layout/fullwidth/fullwidth.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [

  {
    path:'',
    component: FullwidthComponent,
    children:[{
      path:'',
      component: LoginComponent
    },{
      path:'login',
      component: LoginComponent
    }]
},
  {
  path:'',
  component: DefaultComponent,
  children:[{
    path:'dashboard',
    component: DashboardComponent
  }],
  canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
