import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbyComponent } from './hobby.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: HobbyComponent
  }
];

@NgModule({
  declarations: [HobbyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class HobbyModule { }
