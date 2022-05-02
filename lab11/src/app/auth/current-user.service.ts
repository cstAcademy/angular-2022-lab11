import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private userEmail: string = '';
  private token: string = 'token';

  constructor() {}

  // ------------------ current user ------------------
  getCurrentUserEmail() {
    return this.userEmail;
  }

  setCurrentUserEmail(email: string) {
    this.userEmail = email;
  }

  // --------------- token ----------------------------

  getToken() {
    return window.localStorage[this.token] ?? null;
  }

  saveTokenToLocalStorage(token: string): void {
    window.localStorage[this.token] = token;
  }

  clearStorage(): void {
    window.localStorage.removeItem(this.token);
  }

  isLoggedIn(): boolean {
    return window.localStorage[this.token] ?? null;
  }
}
