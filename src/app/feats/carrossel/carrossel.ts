import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-carrossel',
  styleUrl: './carrossel.css',
  templateUrl: './carrossel.html',
})
export class Carrossel {
  
  indiceAtual = 0;

  produtos = [
    {
      categoria: 'Favoritos',
      nome: 'Matcha Latte Gelado',
      preco: 24.90,
      descricao: 'Uma bebida refrescante, cremosa e cheia de energia que combina chá verde em pó com leite frio e gelo.',
      imagem: 'assets/imagens/matcha.png'
    },
    {
      categoria: 'Favoritos',
      nome: 'Café Gelado',
      preco: 19.90,
      descricao: 'Uma bebida clássica adaptada para o verão brasileiro.',
      imagem: 'assets/imagens/cafe-gelado.png'
    }
  ];

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


