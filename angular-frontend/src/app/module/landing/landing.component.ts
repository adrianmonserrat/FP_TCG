import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component'; // Asegúrate de que la ruta sea correcta
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NavbarComponent,FooterComponent], // Agrega NavbarComponent aquí
  templateUrl: './landing.component.html',
})
export class LandingComponent {}