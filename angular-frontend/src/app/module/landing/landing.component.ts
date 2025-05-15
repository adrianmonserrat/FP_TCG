import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component'; // Importa el NavbarComponent

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NavbarComponent], // Añade NavbarComponent aquí
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  // Aquí va la lógica del componente
}