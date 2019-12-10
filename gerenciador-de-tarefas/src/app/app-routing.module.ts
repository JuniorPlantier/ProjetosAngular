import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';

// para tornar as rotas disponíveis, é preciso concatenar com a rota princial "routes".
const routes: Routes = [
  //  tela inicial, ou seja, URL sem nada, roteia para listar tarefas.
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefaRoutes // concatena o Array.
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
