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

  

}
