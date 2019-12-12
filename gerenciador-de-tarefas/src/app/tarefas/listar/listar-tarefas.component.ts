import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefas = this.listarTodos();
    /*
    this.tarefas = [
      new Tarefa(1, "Tarefa 1", false),
      new Tarefa(2, "Tarefa 2", true)
    ];
    */
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  // $event, é um objeto padrão que representa o evento do navegador.
  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault(); // utilizado para evitar o reload da página
    if(confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  atualizarStatus(tarefa: Tarefa): void {
    if(confirm('Deseja alterar o status da tarefa "'+tarefa.nome+'"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
