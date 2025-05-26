import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './module/assets/footer/footer.component'; // Asegúrate de que la ruta sea correcta


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FooterComponent], // Añade NavbarComponent aquí
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-frontend';
}