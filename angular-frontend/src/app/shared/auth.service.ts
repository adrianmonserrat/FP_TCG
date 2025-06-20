import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8060';

  constructor(private http: HttpClient) {}

  login(nickname: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/login`, { nickname: nickname, password }, { withCredentials: true });
  }

  checkAuth(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/check`, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/logout`, {}, { withCredentials: true });
  }
}