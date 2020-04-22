import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { Routes, RouterModule } from '@angular/router';
import { CounterActionsModule } from '../counter-actions/counter-actions.module';
const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  }
];


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CounterActionsModule
  ]
})
export class CounterModule { }
