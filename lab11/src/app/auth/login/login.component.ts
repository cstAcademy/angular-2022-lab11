import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.logInForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  logIn() {
    this.authService
      .login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      })
      .subscribe(
        (res) => {
          this._snackBar.open('Log In Successfully!', '', {
            duration: 2000,
          });
          this.router.navigateByUrl('');
          this.saveUserData(res.token);
        },
        (error) => {
          console.error(error);
          this._snackBar.open('Log In Error!', '', {
            duration: 2000,
          });
        }
      );
  }

  saveUserData(token: string) {
    this.currentUserService.saveTokenToLocalStorage(token);
    this.currentUserService.setCurrentUserEmail(this.email?.value);

    console.log(this.currentUserService.getToken());
  }

  get email() {
    return this.logInForm.get('email');
  }

  get password() {
    return this.logInForm.get('password');
  }
}
