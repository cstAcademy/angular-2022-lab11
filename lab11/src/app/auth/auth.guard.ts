import { CurrentUserService } from 'src/app/auth/current-user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: CurrentUserService,
    private router: Router
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      console.log('is not authenticated');
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}
