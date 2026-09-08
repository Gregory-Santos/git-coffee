import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-produtos-filtros',
  templateUrl: './produtos-filtros.html',
  styleUrl: './produtos-filtros.css',
})
export class ProdutosFiltros {

  // Controla se o painel de filtros está aberto
  filtrosAbertos = false;

  filtros = {
   
    categoria: '',
    ordenacao: '',
  };

  // Abre ou fecha os filtros
  abrirFiltros() {
    this.filtrosAbertos = !this.filtrosAbertos;
  }

  

  aplicarFiltros() {
    console.log('Filtros aplicados:');
    console.log(this.filtros);

    // Fecha o painel depois de aplicar
    this.filtrosAbertos = false;
  }

  limparFiltros() {
    this.filtros = {
      
      categoria: '',
      ordenacao: ''
    };

    console.log('Filtros limpos');
  }
}