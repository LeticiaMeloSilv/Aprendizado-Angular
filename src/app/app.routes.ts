import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SegundaTelaComponent } from './components/segunda-tela/segunda-tela.component';

export const routes: Routes = [
	{path:'home', component: HomeComponent},
  {path:'segunda', component: SegundaTelaComponent},
  // {path:'', component: HomeComponent}
];
// src/app/app-routing.module.ts
