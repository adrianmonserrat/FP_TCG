import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8060/';  // Asegúrate de que la URL es correcta

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  checkAuth(): Observable<any> {
    return this.http.get('${this.apiUrl}/check');
  }

  logout(): Observable<any> {
    return this.http.post('${this.apiUrl}/logout', {});
  }
}