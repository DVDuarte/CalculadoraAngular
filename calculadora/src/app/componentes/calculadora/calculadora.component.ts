import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  resultado: string = '0'; 
  private valorAtual: number = 0; 
  private operador: string = ''; 
  private valorNovo: boolean = false; 

  atualizarDisplay(valor: string) {
    if (['+', '-', '*', '/'].includes(valor)) {
      this.definirOperador(valor);
      return;
    }

    if (valor === '=') {
      this.calcular();
      return;
    }

    if (valor === '.') {
      if (!this.resultado.includes('.')) {
        this.resultado += valor;
      }
      return;
    }

    if (this.resultado === '0' || this.valorNovo) {
      this.resultado = valor;
      this.valorNovo = false;
    } else {
      this.resultado += valor;
    }
  }

  definirOperador(operador: string) {
    if (this.operador && this.valorNovo) {
      this.operador = operador;
      return;
    }

    if (this.valorAtual === 0) {
      this.valorAtual = parseFloat(this.resultado); 
    } else {
      this.calcular(); 
    }

    this.operador = operador; 
    this.valorNovo = true; 
  }

  calcular() {
    let valorCalculado: number = this.valorAtual;

    switch (this.operador) {
      case '+':
        valorCalculado += parseFloat(this.resultado);
        break;
      case '-':
        valorCalculado -= parseFloat(this.resultado);
        break;
      case '*':
        valorCalculado *= parseFloat(this.resultado);
        break;
      case '/':
        if (parseFloat(this.resultado) === 0) {
          this.resultado = 'Erro'; 
          return;
        }
        valorCalculado /= parseFloat(this.resultado);
        break;
      default:
        return;
    }

    this.resultado = valorCalculado.toString();
    this.valorAtual = valorCalculado;
    this.operador = '';
    this.valorNovo = true;
  }

  limpar() {
    this.resultado = '0';
    this.valorAtual = 0;
    this.operador = '';
    this.valorNovo = false;
  }
}
