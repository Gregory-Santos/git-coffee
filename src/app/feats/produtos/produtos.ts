import { Component } from '@angular/core';
import { ProdutosCard } from "./produtos-card/produtos-card";
import { ProdutosFiltros } from "./produtos-filtros/produtos-filtros";

@Component({
  imports: [ProdutosCard, ProdutosFiltros],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos {}
