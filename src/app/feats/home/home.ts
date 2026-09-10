import { Component } from '@angular/core';
import { Carrossel } from "../carrossel/carrossel";
import { Categorias } from "../categorias/categorias";
import { ProdutosCard } from "../produtos/produtos-card/produtos-card";
import { Produtos } from "../produtos/produtos";

@Component({
  imports: [Carrossel, Categorias, ProdutosCard, Produtos],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
