import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Produto } from '../models/produto';
import { PRODUTOS_API } from '../models/produtos-api/produtos-api';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from "../produtos";
import { Location } from '@angular/common';

@Component({
  imports: [Produtos],
  selector: 'app-detalhes-produtos',
  styleUrl: './detalhes-produtos.css',
  templateUrl: './detalhes-produtos.html',
})
export class DetalhesProdutos {

  private readonly location = inject(Location);
  private readonly route = inject(ActivatedRoute);
  private readonly scroller = inject(ViewportScroller);

  protected produto: Produto | undefined;

  constructor() {
    this.route.paramMap.subscribe(params => {
      const produtoId = params.get('id');

      this.produto = PRODUTOS_API.find(
        produto => produto.id === Number(produtoId)
      );
      

      this.scroller.scrollToPosition([0, 0]);
    });
  }
    voltar() {
    this.location.back();
  }
}