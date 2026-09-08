import { Component, input } from '@angular/core';
import { Produto } from '../models/produto';
import { PRODUTOS_API } from '../models/produtos-api/produtos-api';

@Component({
  selector: 'app-produtos-card',
  templateUrl: './produtos-card.html',
  styleUrl: './produtos-card.css'
})
export class ProdutosCard {

  produto = input.required<Produto>();

}