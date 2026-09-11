import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { Carrinho } from './feats/carrinho/carrinho';
import { Produtos } from './feats/produtos/produtos';
import { Sobre } from './feats/sobre/sobre';
import { Login } from './feats/login/login';
import { ProdutosFiltros } from './feats/produtos/produtos-filtros/produtos-filtros';
import { Categorias } from './feats/categorias/categorias';
import { DetalhesProdutos } from './feats/produtos/detalhes-produtos/detalhes-produtos';
import { Administrador } from './feats/login/administrador/administrador';

export const routes: Routes = [

    {path: 'home', component: Home},
    {path: 'produtos/:id', component: DetalhesProdutos},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'categorias', component: Categorias},
    {path: 'carrinho', component: Carrinho},
    {path: 'produtos', component: Produtos},
    {path: 'sobre', component: Sobre},
    {path: 'login', component: Login},
    {path: 'produtos-filtros', component: ProdutosFiltros},
    {path: 'administrador', component: Administrador}
];