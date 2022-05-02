import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/auth/current-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.currentUserService.setCurrentUserEmail('');
    this.currentUserService.clearStorage();
    this.router.navigateByUrl('/auth');
    this._snackBar.open('Log Out Successfully!', '', {
      duration: 2000,
    });
  }
}
