import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CarrinhoService } from '../../feats/carrinho/carrinho-service';

@Component({
  imports: [RouterLink, RouterLinkActive, FormField,],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  //conecta service do carrinho, para icone de numero quando adicona produto//
  protected readonly CarrinhoService = inject(CarrinhoService);

  // protected readonly produtosService = inject(ProdutosService);

  pesquisaModel = signal<string>("");

  pesquisaForm = form(this.pesquisaModel);

  pesquisarProduto(event: SubmitEvent) {
    event.preventDefault()

  }
}