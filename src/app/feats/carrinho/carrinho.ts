import { Component, inject } from '@angular/core';
import { CarrinhoService } from './carrinho-service';
import { Produtos } from '../produtos/produtos';

@Component({
  imports: [],
  selector: 'app-carrinho',
  styleUrl: './carrinho.css',
  templateUrl: './carrinho.html',
})
export class Carrinho {

  protected readonly CarrinhoService = inject(CarrinhoService);
}
