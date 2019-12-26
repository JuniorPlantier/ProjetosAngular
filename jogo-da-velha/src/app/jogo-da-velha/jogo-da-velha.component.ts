import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
    this.jogoDaVelhaService.inicializar();
  }

  // Retorna se a tela de início deve ser exibida.
  get showInicio(): boolean {
    return this.jogoDaVelhaService.ShowInicio;
  }

  // Retorna se o tabuleiro deve ser exibida.
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.ShowTabuleiro;
  }

  // Retorna se a tela de fom de jogo deve ser exibida.
  get showFinal(): boolean {
    return this.jogoDaVelhaService.ShowFinal;
  }

  // botão "Iniciar Jogo"
  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  // realiza uma jogada, ao clicar em algum local no tabuleiro.
  jogar(posX: number, posY: number): void{
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  // para exibir a peça X
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  // para exibir a peça O
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

 // retorna se a marcação da vitória deve ser exibida
 exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
 }

 // qual jogador corrente, para verificar se ele venceu ou não.
 get jogador(): number {
   return this.jogoDaVelhaService.jogador;
 }

 // Inicia um novo jogo
 novoJogo(): void {
   this.jogoDaVelhaService.novoJogo();
 }

}