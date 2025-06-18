import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColeccionService {
  private apiUrl = 'http://localhost:8060/cards/'; // Cambia la URL si tu endpoint es diferente
  private http = inject(HttpClient);

  getCartas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}