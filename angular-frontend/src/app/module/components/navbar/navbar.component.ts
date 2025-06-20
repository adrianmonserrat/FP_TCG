import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}

  isLoggedIn(): boolean {
    // Puedes mejorar esto según cómo guardes el login (token, localStorage, etc)
    return !!localStorage.getItem('user');
  }

  logout() {
    this.authService.logout().subscribe(() => {
      localStorage.removeItem('user');
      window.location.reload();
    });
  }
}