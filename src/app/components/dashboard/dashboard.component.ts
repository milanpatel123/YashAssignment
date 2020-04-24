import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: any;
  users: any;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.users = JSON.parse(localStorage.getItem('users'));
  }
  deleteUser(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    }
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.route.navigateByUrl('/login');
  }


}
