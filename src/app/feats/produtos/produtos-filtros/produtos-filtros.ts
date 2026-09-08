import { FormsModule } from "@angular/forms";
import { Component } from '@angular/core';

@Component({
  imports: [FormsModule],
  selector: 'app-produtos-filtros',
  styleUrl: './produtos-filtros.css',
  templateUrl: './produtos-filtros.html',
})
export class ProdutosFiltros {

  filtros={
    busca:'',
    categoria:'',
    precoMaximo: null,
    ordenacao:'',
  };

  aplicarFiltros(){
    console.log('filtros aplicados:');
    console.log(this.filtros);
  }

  limparFiltros(){

    this.filtros = {
    busca:'',
    categoria:'',
    precoMaximo:null,
    ordenacao: ''
  };

  console.log('filtros limpos');

}
}
