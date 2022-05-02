import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  register() {
    this.authService
      .register({
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      })
      .subscribe(
        (res) => {
          this._snackBar.open('Register Successfully!', '', {
            duration: 2000,
          });
          this.router.navigateByUrl('/auth/login');
        },
        (error) => {
          console.error(error);
          this._snackBar.open('Register Error!', '', {
            duration: 2000,
          });
        }
      );
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
