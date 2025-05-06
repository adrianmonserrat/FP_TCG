// filepath: /home/adrianmonserrat/Escritorio/Proyecto_album_TCG/angular-frontend/src/app/module/cards/cards.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiUrl = 'http://localhost:8060/api/cartas'; // Reemplaza con la URL de tu API
  private http = inject(HttpClient); // Inyecta HttpClient

  getCards(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}