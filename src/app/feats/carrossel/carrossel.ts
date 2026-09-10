import { Component } from '@angular/core';
import { Produto } from '../produtos/models/produto';

@Component({
  imports: [],
  selector: 'app-carrossel',
  styleUrl: './carrossel.css',
  templateUrl: './carrossel.html',
})
export class Carrossel {
  
  produtos = [
    {
      categoria: 'Favoritos',
      nome: 'Matcha Latte Gelado',
      preco: 24.90,
      descricao: 'Uma bebida refrescante, cremosa e cheia de energia que combina chá verde em pó com leite frio e gelo.',
      imagem: 'img/iced-matcha-latte-classico.png'
    },
    {
      categoria: 'Favoritos',
      nome: 'Café Gelado',
      preco: 19.90,
      descricao: 'Uma bebida clássica adaptada para o verão brasileiro.',
      imagem: 'img/iced-americano.png'
    }
  ];
  
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

  adicionar(produto: any) {
    console.log('Produto adicionado:', produto);
  }

  
}