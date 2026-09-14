import { Component, inject, signal } from '@angular/core';
import { Cadastrar } from './cadastrar/cadastrar';
import { Cadastrados } from './cadastrados/cadastrados';
import { ProdutoService } from '../../services/produto-service';
import { ProdutoAdmin } from '../produtos/models/produto-admin';

@Component({
  selector: 'app-adm',
  imports: [Cadastrar, Cadastrados],
  styleUrl: './adm.css',
  templateUrl: './adm.html',
})
export class Adm {

  private produtoService = inject(ProdutoService);

  produtos = signal<ProdutoAdmin[]>([]);
  produtoEmEdicao = signal<ProdutoAdmin | null>(null);

  constructor() {
    this.carregarProdutos();
  }

  private carregarProdutos() {
    this.produtoService.listar().subscribe(produtos => {
      this.produtos.set(produtos);
    });
  }

  onProdutoCadastrado(produto: ProdutoAdmin) {
    this.produtoService.criar(produto).subscribe({
      next: () => this.carregarProdutos(),
      error: (err) => console.error('Erro ao criar produto:', err)
    });
  }

  onProdutoAtualizado(produto: ProdutoAdmin) {
    if (produto.id === undefined) return;

    this.produtoService.atualizar(produto.id, produto).subscribe({
      next: () => {
        this.produtoEmEdicao.set(null);
        this.carregarProdutos();
      },
      error: (err) => console.error('Erro ao atualizar produto:', err)
    });
  }

  onProdutoExcluido(id: number) {
    this.produtoService.deletar(id).subscribe(() => {
      this.carregarProdutos();
    });
  }

  onProdutoParaEditar(produto: ProdutoAdmin) {
  if (produto.id === undefined) return;

  this.produtoService.buscarPorId(produto.id).subscribe({
    next: (produtoCompleto) => this.produtoEmEdicao.set(produtoCompleto),
    error: (err) => console.error('Erro ao buscar produto completo:', err)
  });
}
}