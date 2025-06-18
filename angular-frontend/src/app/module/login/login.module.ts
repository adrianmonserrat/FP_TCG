import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Añade FormsModule
  templateUrl: './login.module.html',
})

export class LoginComponent {

  constructor(private router: Router) { } // Inyecta Router para la navegación

  username = '';
  password = '';

  onSubmit() {
    // Aquí puedes añadir la lógica para enviar los datos de inicio de sesión
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.router.navigate(['']); // Redirige al usuario a la página principal después del inicio de sesión
  }

/*onLogin() {
  this.authService.loginUser(this.loginData).subscribe({
    next: (response) => {
      if (response && response.success) {
        console.log('Login exitoso:', response);
        this.router.navigate(['/dashboard']); // Redirige donde quieras
      } else {
        this.loginError = response.message || 'Usuario no encontrado. ¿Estás registrado?';
      }
    },
    error: (error) => {
      console.error('Error al iniciar sesión:', error);
      this.loginError = 'No se pudo iniciar sesión. Verifica tus credenciales.';
    }
  });
}

loginUser(credentials: { email: string; password: string }) {
  return this.http.post<any>('/login', credentials, { withCredentials: true });
}*/

}