import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  // preciso receber do html se a tarefa está concluida ou não, isso é feito através de:
  @Input() tarefaConcluida: boolean; // deve ter o mesmo nome da diretiva.

  // ElementRef, é uma referencia do elemento html que eu quero add no componente.
  constructor(private el: ElementRef) {}

  // logo após a criação da diretiva
  ngOnInit() {
    if(this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration="line-through";
    }
  }

}