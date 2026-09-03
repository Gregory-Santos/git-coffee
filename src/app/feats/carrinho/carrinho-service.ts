import { Service, signal } from '@angular/core';
import { ItemCarrinhoInterface } from './item-carrinho-interface';

@Service()
export class CarrinhoService {


    protected carrinho = signal<ItemCarrinhoInterface[]>([])

     contador = signal<number>(0);

    incrementar() {
        this.contador.update(valor => valor + 1);
    };
    
    diminuir(){
        if(this.contador() > 0){
            this.contador.update( valor => valor -1);
        }
    }
    zerar(){
        this.contador.set(0);
    }
}
