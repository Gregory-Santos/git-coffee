
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProdutosCard } from "./produtos-card/produtos-card";
import { PRODUTOS_API } from './models/produtos-api/produtos-api';
import { ProdutosFiltros } from "./produtos-filtros/produtos-filtros";

@Component({
  imports: [ProdutosCard, ProdutosFiltros],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos {

  // Permite acessar os parâmetros da URL
  private route = inject(ActivatedRoute);

  // Lista de produtos que aparece na tela
  produtos = PRODUTOS_API;

  constructor() {

    // Observa mudanças nos queryParams
    this.route.queryParams.subscribe(params => {

      // Pega a categoria da URL
      const categoria = params['categoria'] || '';

      // Pega a ordenação da URL
      const ordenacao = params['ordenacao'] || '';

      // Começa com todos os produtos
      let produtosFiltrados = [...PRODUTOS_API];


      // ==========================
      // FILTRO POR CATEGORIA
      // ==========================

      if (categoria) {

        produtosFiltrados = produtosFiltrados.filter(produto =>
          produto.descricao.includes(`[${categoria}]`)
        );

      }


      // ==========================
      // ORDENAÇÃO POR PREÇO
      // ==========================

      if (ordenacao === 'menor-preco') {

        produtosFiltrados.sort((a, b) =>
          a.preco - b.preco
        );

      }

      if (ordenacao === 'maior-preco') {

        produtosFiltrados.sort((a, b) =>
          b.preco - a.preco
        );

      }


      // ==========================
      // ORDENAÇÃO POR NOME
      // ==========================

      if (ordenacao === 'nome') {

        produtosFiltrados.sort((a, b) =>
          a.nome.localeCompare(b.nome)
        );

      }


      // Atualiza os produtos mostrados na tela
      this.produtos = produtosFiltrados;

      console.log('Categoria:', categoria);
      console.log('Ordenação:', ordenacao);
      console.log('Produtos:', this.produtos);
    });
  }
}

