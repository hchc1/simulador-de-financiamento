import { Parcela } from "./parcela.js";

export class Financiamento {
  #taxaJuros;
  #prazo;
  #parcelas = [];

  constructor(valor, entrada, taxaJuros, prazo) {
    this.#taxaJuros = taxaJuros;
    this.#prazo = prazo;
    // compose
    this.#parcelas.push(new Parcela(0,0,0,0,valor - entrada))
  }

  static calcJuros (valor, taxaJuros) {
    return valor * (taxaJuros / 100);
  }

  calcParcelasMensais() {
    let saldoDevedor = this.#parcelas.at[-1].getSaldo();
    let prazo = this.#prazo - (this.#parcelas.length -1);
    let amortizacao = saldoDevedor / prazo;
    for(i = 0; i < prazo; i++) {
      const numero = this.#parcelas.length;
      const juros = Financiamento.calcJuros(saldoDevedor, this.#taxaJuros);
      const valor = juros + amortizacao;
      saldoDevedor -= amortizacao;
      if (saldoDevedor < 0) {
        saldoDevedor = 0;
      }
      this.#parcelas.push(new Parcela(numero, valor, juros, amortizacao, saldoDevedor))
    }
  }

  exibeParcelas() {
    const parcelas = this.#parcelas.slice(1);
    for (const parcela of parcelas) {
      const linha  = tBody.insertRow(-1);
      for (const dado of parcela.getDadosFormatados()) {
        const celula = linha.insertCell(-1);
        celula.textContent = dado;
      }
    }
  }

  getParcelas() {
    return this.#parcelas;
  }

}