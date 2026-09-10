import { Component, inject, input, signal } from '@angular/core';
import { Produto } from '../models/produto';
import { PRODUTOS_API } from '../models/produtos-api/produtos-api';
import { CarrinhoService } from '../../carrinho/carrinho-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-produtos-card',
  templateUrl: './produtos-card.html',
  styleUrl: './produtos-card.css',
  imports: [RouterLink],
})
export class ProdutosCard {
 adicionado = signal(false);
  
  //injetando carrinho service//
  constructor(private CarrinhoService: CarrinhoService) {}
  adicionarProduto() {
    this.CarrinhoService.adicionarProduto(this.produto());
    
this.adicionado.set(true)
   }

  produto = input.required<Produto>();
}
