import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { E404Component } from './e404/e404.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  // Rota não especificada é redirecionada para a "home"
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // Rota para a listagem dos games
  { path: 'list', component: ListComponent, data: { title: 'Lista de Jogos' } },
  
  { path: 'new', component: NewComponent, data: { title: 'Novo Jogo' } },
  { path: 'about', component: AboutComponent, data: { title: 'Sobre o My Games' } },

  // Rota desconhecida é redirecionada para o componente "Erro 404"
  { path: '**', component: E404Component, data: { title: 'Página não encontrada' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
