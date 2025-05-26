import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Añade FormsModule
  templateUrl: './login.module.html',
})
export class LoginComponent {
  username = '';
  password = '';

  onSubmit() {
    // Aquí puedes añadir la lógica para enviar los datos de inicio de sesión
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}