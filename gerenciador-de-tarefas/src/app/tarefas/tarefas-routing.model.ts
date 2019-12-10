import { Routes } from '@angular/router';

import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';

export const TarefaRoutes: Routes = [
    
    // Essa rota associa um path para um componente específico.
    {
        /* Se eu tiver na URL o path 'tarefas/listar', o Angular irá direcione para o ListarTarefasComponent;
           Com isso o ListarTarefasComponent será instanciado, criado e renderizado e o HTML dentro do ListarTarefasComponent
           será exibido dentro do <router-outlet> */
         path: 'tarefas/listar'
        ,component: ListarTarefasComponent
    },
    {
         path: 'tarefas' // atalho
        ,redirectTo: 'tarefas/listar'
    },
    {
         path: 'tarefas/cadastrar'
        ,component: CadastrarTarefaComponent
    }
];