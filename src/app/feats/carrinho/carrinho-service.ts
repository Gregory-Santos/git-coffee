import { Service, signal } from '@angular/core';
import { ItemCarrinhoInterface } from './item-carrinho-interface';
import { Produto } from '../produtos/models/produto';

@Service()
export class CarrinhoService {

    protected produtoFicticio = signal<Produto>(
        {
            id: 1,
            nome: 'Café',
            descricao: 'Café com torra média, toques de caramelo',
            preco: 20.90,
            peso: 250,
            estoque: 1
    })



    protected carrinho = signal<ItemCarrinhoInterface[]>([
        {
            produto: this.
            quantidade: 1
        }
    ])

    contador = signal<number>(0);

    incrementar() {
        this.contador.update(valor => valor + 1);
    };

    diminuir() {
        if (this.contador() > 0) {
            this.contador.update(valor => valor - 1);
        }
    }
    zerar() {
        this.contador.set(0);
    }
}
