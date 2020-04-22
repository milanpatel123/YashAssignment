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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
