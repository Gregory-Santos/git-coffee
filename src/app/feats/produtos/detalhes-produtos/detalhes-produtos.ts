import { Component, inject } from '@angular/core';
import { Produto } from '../models/produto';
import { PRODUTOS_API } from '../models/produtos-api/produtos-api';
import { ActivatedRoute } from '@angular/router';

@Component({
    imports: [],
    selector: 'app-detalhes-produtos',
    styleUrl: './detalhes-produtos.css',
    templateUrl: './detalhes-produtos.html',
})
export class DetalhesProdutos {

  private readonly route = inject(ActivatedRoute);

  protected readonly produtoId = this.route.snapshot.paramMap.get('id');

  protected readonly produto: Produto | undefined =
    PRODUTOS_API.find(produto => produto.id === Number(this.produtoId));

}
