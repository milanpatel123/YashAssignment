import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent implements OnInit {
  @Output() counterChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  incrementCounterClick(operation){
    this.counterChange.emit(operation);
  }

}
