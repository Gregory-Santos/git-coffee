import { Service, signal } from '@angular/core';
import { ItemCarrinhoInterface } from './item-carrinho-interface';

@Service()
export class CarrinhoService {


    protected carrinho= signal<ItemCarrinhoInterface[]>([])
    
}
