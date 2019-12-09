import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) {}

  /* Sempre que o componente é criado o ngOnInit é executado */
  ngOnInit() {
    this.limpar();
  }

  /**
   * Inicializa todos os atributos da classe, com um valor padrão.
   * Ou, sempre que for cliclado no botão 'C'
   * @return void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Sempre que um número for clicado, ele deve ser associado ou ao numero1 ou ao numero2
   * 
   * @param numero 
   */
  adicionarNumero(numero: string): void {
    if(this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor
    if(numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    // primeiro digito é '.' concatena '0' antes do ponto
    if(numConcat === '.' && numAtual === '') {
      return '0.';
    }
    // caso '.' digitado e já contenha um '.', apenas retorna
    if(numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  /**
   * 
   * @param operacao 
   */
  definirOperacao(operacao: string): void {
    if(this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    if(this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular (parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /** Ativado qdo o botão de igual é pressionado. */
  calcular(): void {
    if(this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular (parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
  }

  /**
   * Método utilizado para exibir na tela o valor, do resultado, o nro 2 ou o nro 1.
   * 
   * get => é um convensão do TS; internamente gera um atributo da classe chamada display; cria um acessor get para o display;
   */
  get display(): string {
    if(this.resultado !== null) {
      return this.resultado.toString();
    }
    if(this.numero2 !== null) {
      return this.numero2
    }
    return this.numero1;
  }

}
