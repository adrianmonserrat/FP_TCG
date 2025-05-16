import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NavbarComponent], // Agrega NavbarComponent aquí
  templateUrl: './landing.component.html',
})
export class LandingComponent {}