import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterService } from './register.module.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.module.html',
  
})
export class RegisterComponent implements OnInit {
  registrationData = {
    name: '',
    nickname: '',
    email: '',
    password: ''
  };
  registrationError: string | null = null;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerService.registerUser(this.registrationData).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration error', error);
        this.registrationError = 'Registration failed. Please try again.';
      }
    });
  }
}