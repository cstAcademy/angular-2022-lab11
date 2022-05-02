import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private readonly API_URL = 'https://reqres.in/api';

  register(body: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, body);
  }

  login(body: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, body);
  }
}
