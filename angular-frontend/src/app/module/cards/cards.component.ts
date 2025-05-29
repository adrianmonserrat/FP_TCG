import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsService } from './cards.service';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../assets/navbar/navbar.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  cartas: any[] = [];
  private cardsService = inject(CardsService);
  private http = inject(HttpClient);
  sortBy: string = 'card_number'; // Default sorting
  sortOrder: string = 'asc'; // Default sort order

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardsService.getCards().subscribe(data => {
      this.cartas = data;
      this.sortCards();
    });
  }

  sortCards(): void {
    this.cartas.sort((a: any, b: any) => {
      const aValue = a[this.sortBy];
      const bValue = b[this.sortBy];

      if (aValue < bValue) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  setSortBy(sortBy: string): void {
    if (this.sortBy === sortBy) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = sortBy;
      this.sortOrder = 'asc';
    }
    this.sortCards();
  }
}