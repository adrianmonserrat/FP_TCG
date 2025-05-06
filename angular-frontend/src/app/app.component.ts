// filepath: /home/adrianmonserrat/Escritorio/FP_TCG/angular-frontend/src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // Importa RouterModule
import { CommonModule } from '@angular/common';
import { LandingComponent } from "./module/landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule], // Añade RouterModule a los imports
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'angular-frontend';
}