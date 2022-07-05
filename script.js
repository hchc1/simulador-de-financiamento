import { Financiamento } from "./financiamento.js";
import { FinanciamentoCarencia } from "./financiamentoCarencia.js";

const lista = document.querySelector('#lista')
const carencia = document.querySelector('#carencia');
const tBody = document.querySelector('#tBody');
const btn = document.querySelector('#btnCalc');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');

function limpaCorpoTabela() {
  while(tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }
}

carencia.addEventListener('change', function() {
  if (this.checked) {
    lista.removeAttribute('hidden');
  } else {
    lista.setAttribute('hidden', 'hidden')
  }
});

btn.addEventListener('click', function() {
  limpaCorpoTabela();
  const valor = parseFloat(textoValor.value);
  const entrada = parseFloat(textoEntrada.value);
  const taxaJuros = parseFloat(textoTaxaJuros.value);
  const prazo = parseFloat(textoPrazo.value);
  let simulacao;
  if (carencia.checked) {
    const carenciaa = parseInt(lista.value);
    simulacao = new FinanciamentoCarencia(valor, entrada,taxaJuros, prazo, carenciaa)
  } else {
    simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
  }
  simulacao.calcParcelasMensais();
  simulacao.exibeParcelas();
})