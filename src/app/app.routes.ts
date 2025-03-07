// import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';

// export const routes: Routes = [
// 	{path:'home', component: HomeComponent}
// ];
// src/app/app-routing.module.ts


// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },  // Rota para o componente Home
//   { path: '', redirectTo: '/home', pathMatch: 'full' }  // Redireciona para Home por padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Registra as rotas no Angular
  exports: [RouterModule]  // Torna as rotas acessíveis aos outros módulos
})
export class AppRoutingModule {}
