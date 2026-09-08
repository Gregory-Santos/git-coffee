import { Component } from '@angular/core';
import { ProdutosCard } from "./produtos-card/produtos-card";

@Component({
  imports: [ProdutosCard],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos {}
