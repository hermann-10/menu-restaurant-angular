import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EveningsComponent } from './pages/evenings/evenings.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { MenudetailsComponent } from './pages/menudetails/menudetails.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menudetails/:id', component: MenudetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'soirees', component: EveningsComponent },
  { path: '**', component: PagenotfoundComponent },
];
