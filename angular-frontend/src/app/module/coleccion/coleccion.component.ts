import { Component, OnInit } from '@angular/core';
import { ColeccionService } from './coleccion.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-coleccion',
  standalone: true, // <-- Añade esto
  templateUrl: './coleccion.component.html',
  imports: [NavbarComponent, FooterComponent, CommonModule],
})
export class ColeccionComponent implements OnInit {
  cartas: any[] = [];

  constructor(private coleccionService: ColeccionService) {}

  ngOnInit(): void {
    this.coleccionService.getCartas().subscribe(data => {
      this.cartas = data.map(carta => {
        const local = JSON.parse(localStorage.getItem('coleccion_' + carta.id) || '{}');
        return {
          ...carta,
          normalCount: local.normalCount || 0,
          foilCount: local.foilCount || 0
        };
      });
    });
  }

  incrementar(carta: any, tipo: 'normalCount' | 'foilCount') {
    carta[tipo]++;
    this.guardarLocal(carta);
  }

  decrementar(carta: any, tipo: 'normalCount' | 'foilCount') {
    if (carta[tipo] > 0) {
      carta[tipo]--;
      this.guardarLocal(carta);
    }
  }

  guardarLocal(carta: any) {
    localStorage.setItem(
      'coleccion_' + carta.id,
      JSON.stringify({ normalCount: carta.normalCount, foilCount: carta.foilCount })
    );
  }
}