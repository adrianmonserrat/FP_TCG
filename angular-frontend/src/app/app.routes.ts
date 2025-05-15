// filepath: /home/adrianmonserrat/Escritorio/Proyecto_album_TCG/angular-frontend/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LandingComponent } from './module/landing/landing.component';
import { CardsComponent } from './module/cards/cards.component';
import { NavbarComponent } from './module/navbar/navbar.component';

export const routes: Routes = [
    {path: "", component: LandingComponent},
    {path: "cards", component: CardsComponent},
    {path: "navbar", component: NavbarComponent},
];