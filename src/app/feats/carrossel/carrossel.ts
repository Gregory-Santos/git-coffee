import { Component, inject, signal } from '@angular/core';
import { Produto } from '../produtos/models/produto';
import { PRODUTOS_API } from '../produtos/models/produtos-api/produtos-api';
import { CarrinhoService } from '../carrinho/carrinho-service';
import { DecimalPipe } from '@angular/common';
import { Produtos } from '../produtos/produtos';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Produtos, DecimalPipe, RouterLink],
  selector: 'app-carrossel',
  styleUrl: './carrossel.css',
  templateUrl: './carrossel.html',
})
export class Carrossel {

  //injeta service para função adicionar produto do carrossel no carrinho//
  protected CarrinhoService = inject(CarrinhoService);

  adicionado = signal(false);

  produtos = PRODUTOS_API.filter(produto =>
    [7, 3, 6].includes(produto.id)
  );

  indiceAtual = 0;
  produto = this.produtos[this.indiceAtual];

  anterior() {
    this.indiceAtual = this.indiceAtual === 0 ? this.produtos.length - 1 : this.indiceAtual - 1;
    this.produto = this.produtos[this.indiceAtual];
  }

  proximo() {
    this.indiceAtual = this.indiceAtual === this.produtos.length - 1 ? 0 : this.indiceAtual + 1;
    this.produto = this.produtos[this.indiceAtual];
  }

  irPara(indice: number) {
    this.indiceAtual = indice;
    this.produto = this.produtos[this.indiceAtual];
  }

  adicionar(produto: Produto) {
    this.CarrinhoService.adicionarProduto(produto);

    this.adicionado.set(true);

    setTimeout(() => {
      this.adicionado.set(false);
    }, 1500);
  }

  limitarDescricao(descricao: string) {
    return descricao.length > 90
      ? descricao.slice(0, 90) + '...'
      : descricao;
  }

}