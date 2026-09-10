import { Component, input, signal } from '@angular/core';
import { Produto } from '../models/produto';
import { CarrinhoService } from '../../carrinho/carrinho-service';

@Component({
  selector: 'app-produtos-card',
  templateUrl: './produtos-card.html',
  styleUrl: './produtos-card.css',
})
export class ProdutosCard {
  adicionado = signal(false);

  //injetando carrinho service
  constructor(private carrinhoService: CarrinhoService) {}

  adicionarProduto() {
    this.carrinhoService.adicionarProduto(this.produto());

    this.adicionado.set(true);

    // Oculta o Snack Bar após 2.5 segundos
    setTimeout(() => {
      this.adicionado.set(false);
    }, 1500);
  }

  produto = input.required<Produto>();
}