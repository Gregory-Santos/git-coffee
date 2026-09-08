import { Component } from '@angular/core';
import { Produto } from '../produto';

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: 'Café Gelado',
    preco: 14.90,
    descricao: 'Café, leite, gelo e canela.'
  },
  {
    id: 2,
    nome: 'Café Caramelo',
    preco: 16.90,
    descricao: 'Café, leite e caramelo.'
  }
];


@Component({
  imports: [],
  selector: 'app-produtos-api',
  styleUrl: './produtos-api.css',
  templateUrl: './produtos-api.html',
})
export class ProdutosApi {

  
}
