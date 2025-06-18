import { Routes } from '@angular/router';
import { LandingComponent } from './module/landing/landing.component';
import { CardsComponent } from './module/cards/cards.component';
import { NavbarComponent } from './module/components/navbar/navbar.component';
import { LoginComponent } from './module/login/login.module'; // Importa LoginComponent
import { RegisterComponent } from './module/register/register.module'; // Importa RegisterComponent
import { ColeccionComponent } from './module/coleccion/coleccion.component';

export const routes: Routes = [
    {path: "", component: LandingComponent},
    {path: "cards", component: CardsComponent},
    {path: "navbar", component: NavbarComponent},
    {path: 'login', component: LoginComponent }, // Añade la ruta para LoginComponent
    {path: 'register', component: RegisterComponent }, // Añade la ruta para RegisterComponent
    {path: 'coleccion', component: ColeccionComponent } // Añade la ruta para ColeccionComponent
];