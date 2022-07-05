export class Parcela {
  #numero;
  #valor;
  #juros;
  #amortizacao;
  #saldoDevedor;

  constructor(numero, valor, juros, amortizacao, saldo) {
    this.#numero = numero;
    this.#valor = valor;
    this.#juros = juros;
    this.#amortizacao = amortizacao;
    this.#saldoDevedor = this.#saldoDevedor;
    
  }

  getSaldo() {
    return this.#saldoDevedor;
  }

  getDadosFormatados() {
    const dados = [];
    dados.push(this.#numero);
    dados.push(this.#valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    dados.push(this.#amortizacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    dados.push(this.#juros.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    dados.push(this.#saldoDevedor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    return dados;
  }
}