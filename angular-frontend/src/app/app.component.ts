import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './shared/auth.service'; // Import AuthService

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div>
      <p *ngIf="message">{{ message }}</p>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = '';

  constructor(private authService: AuthService) { } // Inject AuthService

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(
      (response) => {
        this.message = response.message;  // 'Usuario autenticado' o 'No estás autenticado'
      },
      (error) => {
        this.message = 'No estás autenticado';
      }
    );
  }
}