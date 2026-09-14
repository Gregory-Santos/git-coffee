import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoAdmin } from '../../produtos/models/produto-admin';

@Component({
  selector: 'app-cadastrados',
  imports: [CommonModule],
  styleUrl: './cadastrados.css',
  templateUrl: './cadastrados.html',
})
export class Cadastrados {

  @Input() produtos: ProdutoAdmin[] = [];
  @Output() produtoExcluido = new EventEmitter<number>();
  @Output() produtoParaEditar = new EventEmitter<ProdutoAdmin>();

  excluir(id: number | undefined) {
    if (id !== undefined) {
      this.produtoExcluido.emit(id);
    }
  }

  editar(produto: ProdutoAdmin) {
    this.produtoParaEditar.emit(produto);
  }
}