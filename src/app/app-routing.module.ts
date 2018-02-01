import { AuthService } from './services/auth.service';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const appRoutes: Routes = [
    { path: 'main', component: MainComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' }
  ];