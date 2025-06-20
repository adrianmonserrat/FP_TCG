import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service'; // <-- Importa AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.module.html',
})
export class LoginComponent {
  nickname = '';
  password = '';
  loginError: string | null = null;

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.nickname, this.password).subscribe({
      next: (response) => {
        // Guarda el usuario en localStorage si quieres mantener la sesión en el frontend
        localStorage.setItem('user', JSON.stringify(response.user));
        this.loginError = null;
        this.router.navigate(['']); // Redirige a la home o donde quieras
      },
      error: (error) => {
        this.loginError = error.error?.message || 'No se pudo iniciar sesión. Verifica tus credenciales.';
        console.log(error)
      }
    });
  }
}