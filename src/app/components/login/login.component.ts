import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.users = JSON.parse(localStorage.getItem('users'));
    console.log(this.users);
  }

  login() {
    debugger;
    console.log(this.loginForm.value);
    if (this.users) {
      let duplicateUser = this.users.filter((user) => {
        return user.username === this.loginForm.value.username;
      });
      if (duplicateUser.length === 0) {
        // this.errMsg = this.registerForm.value.username + ' is already taken';
        console.log('Please registre your account');
        return;
        // return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
      }
      if (duplicateUser[0].username === this.loginForm.value.username &&
        duplicateUser[0].password === this.loginForm.value.password
      ) {
        console.log('login success');
        localStorage.setItem('currentUser', JSON.stringify(duplicateUser[0]));
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log('Username or password is incorrect');
      }
    } else {
      console.log('Please registre your account');
    }
  }
}
