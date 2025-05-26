import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsService } from './cards.service';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../assets/navbar/navbar.component'; // Import NavbarComponent

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, NavbarComponent], // Add NavbarComponent to imports
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  cartas: any[] = [];
  private cardsService = inject(CardsService);
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(data => {
      this.cartas = data;
    });
  }
}