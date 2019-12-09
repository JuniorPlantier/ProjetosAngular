import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    // se existe alguma tarefa, é retornado uma lista de tarefas, caso contrário, retorna um array vazio.
    return tarefas ? JSON.parse(tarefas) /* retorna um Json */ : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime(); // ""gerador" de id
    tarefas.push(tarefa); // insere a tarefa na lista
    localStorage['tarefas'] = JSON.stringify(tarefas); /* Retorna uma string */
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    // find: fica dentro de uma lista; ele itera em cada Tarefa e verifica a condição. 
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    // itera sobre as tarefas, verificar se o id é o mesmo e atualiza;
    // forEach(Objeto, Posição da Tarefa, Lista de Objetos)
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    // filter: itera sobre as tarefas, e retorna os objetos de acordo com o filtro aplicado.
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }


}
