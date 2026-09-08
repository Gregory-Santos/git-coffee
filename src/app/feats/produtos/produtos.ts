import { Component } from '@angular/core';
import { ProdutosCard } from "./produtos-card/produtos-card";
import { PRODUTOS_API } from './models/produtos-api/produtos-api';

@Component({
  imports: [ProdutosCard],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos {

  produtos = PRODUTOS_API;

}


