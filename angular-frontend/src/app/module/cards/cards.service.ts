import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiUrl = 'http://localhost:8060/cards/'; // Reemplaza con la URL de tu API
  private http = inject(HttpClient); // Inyecta HttpClient

  getCards(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}