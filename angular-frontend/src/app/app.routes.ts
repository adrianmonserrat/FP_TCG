import { Routes } from '@angular/router';
import { LandingComponent } from './module/landing/landing.component';
import { CardsComponent } from './module/cards/cards.component';
import { NavbarComponent } from './module/assets/navbar/navbar.component';
import { LoginComponent } from './module/login/login.module'; // Importa LoginComponent

export const routes: Routes = [
    {path: "", component: LandingComponent},
    {path: "cards", component: CardsComponent},
    {path: "navbar", component: NavbarComponent},
    {path: 'login', component: LoginComponent }, // Añade la ruta para LoginComponent
];