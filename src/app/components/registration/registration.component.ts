import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  emptyArr = [];
  registerForm: FormGroup;
  users: any;
  errMsg: string;
  fname = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fname: this.fname,
      lname: this.lname,
      username: this.username,
      password: this.password,
    });
    // this.users = JSON.parse(localStorage.getItem('users'));
  }

  register() {
    this.users = JSON.parse(localStorage.getItem('users'));
    console.log(this.registerForm.value);
    if (this.users) {
      // validation
    let duplicateUser = this.users.filter(user => { return user.username === this.registerForm.value.username; });
    if (duplicateUser.length !== 0) {
      this.errMsg = this.registerForm.value.username + ' is already taken';
      console.log(this.registerForm.value.username + '" is already taken' );
      return;
        // return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
    }
    }
    if (this.registerForm.valid){
      this.users === null ? this.registerForm.value.id = 1 : this.registerForm.value.id = this.users.length + 1;
      this.users === null ? this.emptyArr.push(this.registerForm.value) : this.users.push(this.registerForm.value);
      this.users === null ? localStorage.setItem('users', JSON.stringify(this.emptyArr)) : localStorage.setItem('users', JSON.stringify(this.users));
      this.registerForm.reset();
      this.errMsg = '';
    }
  }


}
