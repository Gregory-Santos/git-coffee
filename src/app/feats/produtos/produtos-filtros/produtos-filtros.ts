
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-produtos-filtros',
  templateUrl: './produtos-filtros.html',
  styleUrl: './produtos-filtros.css',
})
export class ProdutosFiltros {

  // Lê os parâmetros atuais da URL
  private route = inject(ActivatedRoute);

  // Permite alterar a URL
  private router = inject(Router);

  // Controla abertura do painel
  filtrosAbertos = false;

  filtros = {
    categoria: '',
    ordenacao: '',
  };

  constructor() {

    // Observa os parâmetros da URL
    this.route.queryParams.subscribe(queryParams => {

      // Pega a categoria da URL
      this.filtros.categoria = queryParams['categoria'] || '';

      // Pega a ordenação da URL
      this.filtros.ordenacao = queryParams['ordenacao'] || '';

      console.log('Categoria selecionada:', this.filtros.categoria);
      console.log('Ordenação:', this.filtros.ordenacao);
    });
  }

  abrirFiltros() {
    this.filtrosAbertos = !this.filtrosAbertos;
  }

  aplicarFiltros() {

    // Coloca os filtros na URL
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        categoria: this.filtros.categoria || null,
        ordenacao: this.filtros.ordenacao || null
      },
      queryParamsHandling: 'merge'
    });

    // Fecha o painel
    this.filtrosAbertos = false;
  }

  limparFiltros() {

    // Limpa os filtros
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        categoria: null,
        ordenacao: null
      },
      queryParamsHandling: 'merge'
    });

    this.filtros = {
      categoria: '',
      ordenacao: ''
    };

    console.log('Filtros limpos');
  }
}

