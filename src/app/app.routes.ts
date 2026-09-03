import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { Carrinho } from './feats/carrinho/carrinho';

export const routes: Routes = [

    {path: 'home', component: Home},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'carrinho', component: Carrinho}

];