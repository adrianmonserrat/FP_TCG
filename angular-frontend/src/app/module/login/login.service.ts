import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

interface LoginData {
  nickname: string;
  password: string;
}

export interface userData {
  id: number;
  nickname: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'

})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { 
    this.http = inject(HttpClient);
    this.router = inject(Router);
  }

  login(loginData: LoginData): Observable<userData> {
    const apiUrl = 'http://localhost:8060/users/'; // Replace with your API endpoint
    return this.http.post<userData>(apiUrl, loginData);
  }

}
