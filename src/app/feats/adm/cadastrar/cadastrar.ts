import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoAdmin } from '../../produtos/models/produto-admin';

@Component({
  selector: 'app-cadastrar',
  imports: [FormsModule],
  styleUrl: './cadastrar.css',
  templateUrl: './cadastrar.html',
})
export class Cadastrar implements OnChanges {

  @Input() produtoParaEditar: ProdutoAdmin | null = null;

  @Output() produtoCadastrado = new EventEmitter<ProdutoAdmin>();
  @Output() produtoAtualizado = new EventEmitter<ProdutoAdmin>();

  id: number | undefined = undefined;
  nome = '';
  preco: number | null = null;
  descricao = '';
  urlImagem = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['produtoParaEditar'] && this.produtoParaEditar) {
      this.id = this.produtoParaEditar.id;
      this.nome = this.produtoParaEditar.nome;
      this.preco = this.produtoParaEditar.preco;
      this.descricao = this.produtoParaEditar.descricao;
      this.urlImagem = this.produtoParaEditar.urlImagem;
    }
  }

  get editando(): boolean {
    return this.id !== undefined;
  }

  salvar() {
    if (!this.nome || !this.preco || !this.descricao || !this.urlImagem) {
      return;
    }

    const produto: ProdutoAdmin = {
      id: this.id,
      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao,
      urlImagem: this.urlImagem,
    };

    if (this.editando) {
      this.produtoAtualizado.emit(produto);
    } else {
      this.produtoCadastrado.emit(produto);
    }

    this.limparFormulario();
  }

  cancelar() {
    this.limparFormulario();
  }

  private limparFormulario() {
    this.id = undefined;
    this.nome = '';
    this.preco = null;
    this.descricao = '';
    this.urlImagem = '';
  }
}