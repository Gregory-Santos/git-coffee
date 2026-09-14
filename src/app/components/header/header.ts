import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { CarrinhoService } from '../../feats/carrinho/carrinho-service';
import { ProdutosCard } from '../../feats/produtos/produtos-card/produtos-card';

@Component({
  imports: [RouterLink, RouterLinkActive, FormField,],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  //conecta service do carrinho, para icone de numero quando adicona produto//
  protected readonly CarrinhoService = inject(CarrinhoService);
  private readonly router = inject(Router);

  pesquisaModel = signal<string>("");
  pesquisaForm = form(this.pesquisaModel);

  pesquisarProduto(event: SubmitEvent) {
    event.preventDefault();

    const termo = this.pesquisaModel().trim();
    if (!termo) return;

    this.router.navigate(['/produtos'], {
      queryParams: { nome: termo }
    })

    this.pesquisaModel.set('');


  }
  
}