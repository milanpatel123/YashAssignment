import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  oncounterChange(operation){
    if (operation === 'INC') {
      this.count++;
    } else if (operation === 'RESET'){
      this.count = 0;
    }
  }

}
