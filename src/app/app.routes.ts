import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { Carrinho } from './feats/carrinho/carrinho';
import { Produtos } from './feats/produtos/produtos';
import { Sobre } from './feats/sobre/sobre';
import { Login } from './feats/login/login';

export const routes: Routes = [

    {path: 'home', component: Home},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'carrinho', component: Carrinho},
    {path: 'produtos', component: Produtos},
    {path: 'sobre', component: Sobre},
    {path: 'login', component: Login}
];