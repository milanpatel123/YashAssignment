import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterActionsComponent } from './counter-actions.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CounterActionsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  entryComponents:[CounterActionsComponent],
  exports: [CounterActionsComponent]
})
export class CounterActionsModule { }
