import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing', // Selector corregido
  standalone: true,
  imports: [CommonModule], // Importa CommonModule
  templateUrl: './landing.component.html', // Apunta a su propio HTML
})
export class LandingComponent {
  // Aquí va la lógica del componente
}