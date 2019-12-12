import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Tarefa, TarefaService } from '../shared'

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm; // Faz referência ao formulário
  tarefa: Tarefa;

  constructor(
     private tarefaService: TarefaService
    ,private route: ActivatedRoute // utilizarmos para obter o parâmetro para carregar a Tarefa.
    ,private router: Router // utilizado para direcionar a tela 
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // obter o id
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void{
    if (this.formTarefa.form.valid) { // Verifica se o formulário está válido
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}