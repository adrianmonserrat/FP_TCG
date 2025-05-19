import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar', // Selector corregido
  standalone: true,
  imports: [CommonModule], // Importa CommonModule
  templateUrl: './navbar.component.html', // Apunta a su propio HTML
})
export class NavbarComponent {
  // Aquí va la lógica del componente
}