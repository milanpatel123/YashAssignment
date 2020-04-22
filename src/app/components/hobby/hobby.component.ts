import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {
  hobby: string;
  arr = [];
  constructor() { }

  ngOnInit(): void {
  }
  getVal(){
    this.arr.push(this.hobby);
    this.hobby = '';
    console.log(this.arr);

  }
}
