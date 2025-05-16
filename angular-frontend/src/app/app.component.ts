// filepath: /home/adrianmonserrat/Escritorio/FP_TCG/angular-frontend/src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './module/navbar/navbar.component'; // Importa el NavbarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, NavbarComponent], // Añade NavbarComponent aquí
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-frontend';
}