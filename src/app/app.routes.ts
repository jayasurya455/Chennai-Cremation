import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HumanServicesComponent } from './pages/human-services/human-services.component';
import { PetServicesComponent } from './pages/pet-services/pet-services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'human-services', component: HumanServicesComponent },
  { path: 'pet-services', component: PetServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
