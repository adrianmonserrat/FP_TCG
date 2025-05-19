import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer', // Selector corregido
  standalone: true,
  imports: [CommonModule], // Importa CommonModule
  templateUrl: './footer.component.html', // Apunta a su propio HTML
})
export class FooterComponent {
  // Aquí va la lógica del componente
}