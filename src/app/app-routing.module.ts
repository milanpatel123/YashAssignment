import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () => import('./components/counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'hobby',
    loadChildren: () => import('./components/hobby/hobby.module').then(m => m.HobbyModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
